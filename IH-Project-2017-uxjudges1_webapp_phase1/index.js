 // globals
    var renderer, scene, camera;

    var polyhedron, polyGeometry, polyMaterial, polyVertsOrig;

    var pointA, pointB, pointC;
    var t = 0.0;
    var radius = 10;
    var dirLightLIntensity, dirLightRIntensity;

   // var spotLight;

    function init() {

        // create scene
        scene = new THREE.Scene();

        // create camera
        var cameraX = 0;
        var cameraY = 0;
        var cameraZ = 80;

        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 10, 300);
        camera.position.x = cameraX;
        camera.position.y = cameraY;
        camera.position.z = cameraZ;
       
        

        // lights
        var pointAColor = "#FFA600";
        pointA = new THREE.PointLight( pointAColor, 2, 50);
        //pointA.position.set( -2, 2, 2 );
        scene.add( pointA); 
       scene.add(new THREE.PointLightHelper(pointA, 0.25));


        var pointBColor = "#35FA85";
        pointB = new THREE.PointLight( pointBColor, 2, 50);
        //pointA.position.set( -2, 2, 2 );
        scene.add( pointB); 
    scene.add(new THREE.PointLightHelper(pointB, 0.25));


        var pointCColor = "#8635FA";
        pointC = new THREE.PointLight( pointCColor, 3, 30);
        //pointA.position.set( -2, 2, 2 );
        scene.add( pointC); 
        scene.add(new THREE.PointLightHelper(pointC, 0.25));

        var dirLightL = new THREE.DirectionalLight(0xffffff, 0.1);
        dirLightL.position.set(2, 0, 0);
       scene.add(dirLightL);

        var dirLightR = new THREE.DirectionalLight(0xffffff, 0.1);
        dirLightR.position.set(-2, 0, 0);
       scene.add(dirLightR);


        // create renderer
        renderer = new THREE.WebGLRenderer();
        var clearColor = "#ff6600";
        renderer.setClearColor(clearColor, 1.0);
        renderer.setSize(window.innerWidth, window.innerHeight);

        // add axes
        var axes = new THREE.AxisHelper(20);
        //scene.add(axes);

        // add polyhedron
        polyGeometry = new THREE.IcosahedronGeometry(50, 2);
       // polyVertsOrig = polyGeometry.clone().vertices;
        //polyMaterial =  new THREE.MeshPhongMaterial( { color: 0xe1e1e1, specular: 0x555555, shininess: 10 } );
        polyMaterial =  new THREE.MeshPhongMaterial({
            color: 0x8635FA, //0xfb3550,
            shading: THREE.FlatShading,
            side: THREE.BackSide
        });

        polyhedron = new THREE.Mesh(polyGeometry, polyMaterial);
        polyhedron.position.set(0,0,0);
        // add it to the scene.

        polyhedron.castShadow = true;
       //scene.add(polyhedron);


         var torusGeometry = new THREE.TorusGeometry(50, 25, 30, 40, Math.PI * 2);

         var torusMaterial =  new THREE.MeshPhongMaterial({
            color: 0x8635FA, //0xfb3550,
            shading: THREE.FlatShading,
            side: THREE.BackSide
        });
         var torus       = new THREE.Mesh(torusGeometry, torusMaterial);
        torus.castShadow = true;
         torus.rotation.x = Math.PI/2;
        // add the sphere to the scene
        scene.add(torus);

// var cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
// var cubeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: false});
// var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// cube.position.set(0,0,0);
// scene.add(cube);


        // controls
        var controls = new function () {
           this.cameraX = cameraX;           
           this.cameraY = cameraY;
           this.cameraZ = cameraZ;
           this.followCam = false;
        };

        var gui = new dat.GUI();
        //gui.add(controls, 'cameraX', 0, 100, 1);
        //gui.add(controls, 'cameraY', -100, 100, 1);
       // gui.add(controls, 'cameraZ', 0, 90, 1);

       gui.add(controls, 'followCam').onChange(function (e) {


            switch(e) {
                case true:
                controls.cameraZ = 60;
                break;
                default:
                controls.cameraZ = 80;
            }
        });


        render();





        function render() {
            
            // camera
            cameraX = controls.cameraX;            
            cameraY = controls.cameraY;
            cameraZ = controls.cameraZ;

            camera.position.x = cameraX;
            camera.position.y = cameraY;
            camera.position.z = cameraZ;


            // camera follow
             if (controls.followCam) {
                camera.lookAt(pointA.position);
            } else {
                camera.lookAt(scene.position);
            }

            // dirlights osc intensity
            dirLightL.intensity = Math.map(Math.sin(t/ Math.PI), -1, 1, 0.1, 0.25);
            dirLightR.intensity = Math.map(Math.cos(t / Math.PI), -1, 1, 0.1, 0.25);

            // move pointlights 
            pointA.position.x = Math.sin( t * 0.1 ) * 45;
            pointA.position.y = Math.cos( t * 0.1 ) * 12;
            pointA.position.z = Math.cos( t * 0.1 ) * 45;

            pointB.position.x = Math.sin( t * 0.2 ) * 45;
            pointB.position.y = Math.cos( t * 0.2 ) * 1;
            pointB.position.z = Math.cos( t * 0.2 ) * 45;

            pointC.position.x = Math.sin( t * 0.3 ) * 45;
            pointC.position.y = Math.cos( t * 0.3 ) * 5;
            pointC.position.z = Math.cos( t * 0.3 ) * 45;

            // spin poly
            polyhedron.rotation.x += 0.001;
            polyhedron.rotation.y += 0.001;

             // render using requestAnimationFrame
            requestAnimationFrame(render);
            renderer.render(scene, camera);

            t += 0.1;

        } // render






        document.getElementById("WebGL-output").appendChild(renderer.domElement);
        renderer.render(scene, camera);


    } // init


        function randomRange(bottom, top) {
                return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;           
        }

        //https://github.com/trembl/p5.Math.js/
        Math.map = function (value, istart, istop, ostart, ostop) {
            return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
        }

        Math.lerp = function(start, stop, amt) {
            return start + (stop-start) * amt;
        }

        function onResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // listen to the resize events
        window.addEventListener('resize', onResize, false);


    window.onload = init;