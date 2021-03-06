var map;
var marker;
var dir;

//d3.select("footer").style("background-color","black");


function initMap() 
{
    dir = {lat: 40.7291, lng: -73.9965};
      map = new google.maps.Map(document.getElementById('map'), 
      {
        zoom: 15,
        center: dir
      }
  );
    marker = new google.maps.Marker(
    {
      position: dir,
      map: map,
      icon: "http://drive.google.com/uc?export=view&id=0B4HRypZd-dwSUmFEOFV6aS1LeFA5WGtxSUxUdUNSNmtDN2pj"

    });
    //distance();
    function coordinate(lat,lng)
    {
      this.lat = lat;
      this.lng = lng;

    }

    // housesAddress
    json ={text:""};
    var address = {c1:[],c2:[]};
    housesInRent ={xml:[],latLng:[],address:[],marker:[],cost:[],distance:[]};

    var xmlhttp = new XMLHttpRequest();
    var url = "https://data.cityofnewyork.us/resource/qxp9-hd2v.json?$where=within_circle(the_geom,40.7291,-73.9965,10000)";
    xmlhttp.open("GET", url, true); 
    xmlhttp.send();
    xmlhttp.onreadystatechange = function()
    {

      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
      {
          var myArr = xmlhttp.responseText;
          var text = myArr;
          json.text=JSON.parse(text);
          createMarkerAddress();
          apiZillowBase();

      }
    };
    var coordinates1 = [];
    var coordinates2 = [];
    function createMarkerAddress()
    {
      for (var j = 0; j < 10; j++)
      {
          i = Math.floor((Math.random()*(json.text.length-1)));
          var c1= new coordinate(parseFloat(json.text[i].the_geom.coordinates[1]),parseFloat(json.text[i].the_geom.coordinates[0])); 
          var c2;
          
          if(json.text[i].pre_direct==undefined && json.text[i].post_type==undefined)
          {
            c2 = json.text[i].h_no+"+"+json.text[i].st_name.replace(" ","+"); 
          }
          else if(json.text[i].pre_direct==undefined )
          {
            c2 = json.text[i].h_no+"+"+json.text[i].st_name.replace(" ","+");+"+"+json.text[i].post_type;  
          }
          else if(json.text[i].post_type==undefined )
          {
            c2 = json.text[i].h_no+"+"+json.text[i].pre_direct+"+"+json.text[i].st_name.replace(" ","+");    
          }
          else
          {
            c2 = json.text[i].h_no+"+"+json.text[i].pre_direct+"+"+json.text[i].st_name.replace(" ","+")+"+"+json.text[i].post_type; 
          }
          coordinates1.push(c1);
          coordinates2.push(c2);
      }
      address.c1 = coordinates1;
      address.c2 = coordinates2;
      
    }

    function apiZillowBase()
    {
      arr = {x:"",y:"",z:""};
      for (var i = 0; i< address.c1.length; i++)
      {
        apiZillow(address.c1[i],address.c2[i],apiZillowAux);
      }
    }
    function apiZillowAux(arr)
    {
        console.log(arr);
        if(arr.x != ""){
          housesInRent.xml.push(arr.x);
          housesInRent.latLng.push(arr.y);
          housesInRent.address.push(arr.z);

        }
        console.log(housesInRent.xml.length);
        for (var i = 0; i < housesInRent.xml.length; i++)
        {
          console.log("in");
          housesInRent.marker.push(new google.maps.Marker({
                    position:housesInRent.latLng[i],
                    map: map, 
                    icon :"http://drive.google.com/uc?export=view&id=0B4HRypZd-dwSLUJmWUM1QW1qNUFsQzlJNnROZzF1ckFZb1U4"
                  }));
        }
        for (var i =0;i<housesInRent.xml.length;i++)
        {
          housesInRent.cost.push(housesInRent.xml[i].getElementsByTagName("rentzestimate")[0].firstChild.innerHTML);
          distance(dir,housesInRent.latLng[i]);
          housesInRent.distance.push(distances[0]);
          distances = [];
        }

        createResults(housesInRent);

    }

    function apiZillow(c1,c2,callback)
    {
      arr2 = {x:"",y:"",z:""};
      var xmlhttp7 = new XMLHttpRequest();
      var url = "https://cors-anywhere.herokuapp.com/"+ "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1g38cz0dtzf_a80zd&address="+c2+"&citystatezip=New+York%2C+NY&rentzestimate=true";
      xmlhttp7.open("GET", url, true);
      xmlhttp7.send();
      xmlhttp7.onreadystatechange = function() 
      {
        if (xmlhttp7.readyState == 4 && xmlhttp7.status == 200) 
        {
            myHousesRent=xmlhttp7.responseXML;

            if(parseInt(myHousesRent.childNodes[0].childNodes[1].childNodes[1].innerHTML) == 0)
            {
              
                  
                  arr2.x = myHousesRent;
                  arr2.y = c1;
                  arr2.z = c2;
                  callback(arr2);
                  
              
              
            }
            
        }
        
      };
    }


    function createHouseMarker(housesInRent)
    {
        console.log(housesInRent.xml.length);
        for (var i = 0; i < housesInRent.xml.length; i++)
        {
          console.log("in");
          housesInRent.marker[i].push(new google.maps.Marker({
                    position:housesInRent.latLng[i],
                    map: map, 
                    icon :"http://drive.google.com/uc?export=view&id=0B4HRypZd-dwSLUJmWUM1QW1qNUFsQzlJNnROZzF1ckFZb1U4"
                  }));
        }
    }
    function housesHandler()
    {
      
      if(toggle3.checked)
      {
        for (var i = 0; i < housesInRent.xml.length; i++)
          {
            housesInRent.marker[i].setMap(map);
          }
      }
      else
      {
        for (var i = 0; i < housesInRent.xml.length; i++)
          {
            housesInRent.marker[i].setMap(null);
          }
      }

    }
    // fire-stations
    var jsonFireStations;
     markersFireStations=[];
    var xmlhttp2 = new XMLHttpRequest();
    var url = "https://data.ny.gov/api/views/qfsu-zcpv/rows.json?api_key=pkjUvxlCooq7LAgoGg2AqF7vrAGQV1cWDhArP18t";
    xmlhttp2.open("GET", url, true);
    xmlhttp2.send();
    xmlhttp2.onreadystatechange = function() 
    {
      if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) 
      {
          var myArr = xmlhttp2.responseText;
          var text = myArr;
          jsonFireStations = JSON.parse(text);
          createmarkersFireStations();
      }
    };

    function createmarkersFireStations()
    {
      for (var i = 0; i < jsonFireStations.data.length; i++)
      {
          var c1 = new coordinate(parseFloat(jsonFireStations.data[i][19][1]),parseFloat(jsonFireStations.data[i][19][2]));
          if((Math.pow(c1.lat-dir.lat,2) + Math.pow(c1.lng-dir.lng,2))<=0.025){  
            markersFireStations.push(new google.maps.Marker({
              position:c1,
              map: map,
              icon: "http://drive.google.com/uc?export=view&id=0B4HRypZd-dwScG1SbHFuZ1pSWHA0eEM5WTltSy1tX3VoaUQ4"
            })
            );
          }
      }
    }

    //career centers
    var jsonCareerCenters;
    var xmlhttp3 = new XMLHttpRequest();
    //var url = "https://data.ny.gov/api/views/g8h7-98zz/rows.json?api_key=pkjUvxlCooq7LAgoGg2AqF7vrAGQV1cWDhArP18t";
    var url ="https://data.ny.gov/resource/mef4-viwt.json?$where=within_circle(location_1,%2040.7291,%20-73.9965,%2010000)";
    xmlhttp3.open("GET", url, true);
    xmlhttp3.send();
    xmlhttp3.onreadystatechange = function() 
    {
      if (xmlhttp3.readyState == 4 && xmlhttp3.status == 200) 
      {
          var myArr = xmlhttp3.responseText;
          var text = myArr;
          jsonCareerCenters = JSON.parse(text);
          createmarkersCareerCenters();
      }
    };
      
    markersCareerCenters = [];

    function createmarkersCareerCenters()
    {
      for (var i = 0; i < jsonCareerCenters.length; i++)
      {
          var aux = jsonCareerCenters[i].location_1.coordinates[1];
          var aux2 = jsonCareerCenters[i].location_1.coordinates[0];
          if(aux!==undefined || aux2!==undefined)
          {
            var c1 = new coordinate(parseFloat(aux),parseFloat(aux2));
              markersCareerCenters.push( new google.maps.Marker({
              position:c1,
              map: map,
              icon: "http://drive.google.com/uc?export=view&id=0B4HRypZd-dwSQmp4UXVWR3V0RDZpdWxPaTBsX0FzejNtSEFJ"

              })
              );        
          }
      }
    }

    //art gallery
    markersArtGalleries=[];
    var jsonArtGalleries;
    var xmlhttp4 = new XMLHttpRequest();
    //var url = "https://data.ny.gov/api/views/g8h7-98zz/rows.json?api_key=pkjUvxlCooq7LAgoGg2AqF7vrAGQV1cWDhArP18t";
    var url ="https://data.cityofnewyork.us/resource/43hw-uvdj.json?$where=within_circle(the_geom, 40.7291, -73.9965, 5000)";
    xmlhttp4.open("GET", url, true);
    xmlhttp4.send();
    xmlhttp4.onreadystatechange = function() 
    {
      if (xmlhttp4.readyState == 4 && xmlhttp4.status == 200) 
      {
          var myArr = xmlhttp4.responseText;
          var text = myArr;
          jsonArtGalleries = JSON.parse(text);
          createmarkersArtGalleries();
      }
    };

    function createmarkersArtGalleries()
    {
      for (var i = 0; i < jsonArtGalleries.length; i++)
      {
          var aux = jsonArtGalleries[i].the_geom.coordinates[1];
          var aux2 = jsonArtGalleries[i].the_geom.coordinates[0];
            var c1 = new coordinate(parseFloat(aux),parseFloat(aux2));
              markersArtGalleries.push( new google.maps.Marker({
              position:c1,
              map: map,
              icon: "http://drive.google.com/uc?export=view&id=0B4HRypZd-dwSendWeU5PR3MtYVhBUXc3MTc4NE9MVk5oZ1ZZ"
              })
              );        
          
      }
    }
    //museums
    markersMuseums=[];
    var jsonMuseums;
    var xmlhttp5 = new XMLHttpRequest();
    //var url = "https://data.ny.gov/api/views/g8h7-98zz/rows.json?api_key=pkjUvxlCooq7LAgoGg2AqF7vrAGQV1cWDhArP18t";
    var url ="https://data.cityofnewyork.us/resource/fn6f-htvy.json?$where=within_circle(the_geom, 40.7291, -73.9965, 5000)";
    xmlhttp5.open("GET", url, true);
    xmlhttp5.send();
    xmlhttp5.onreadystatechange = function() 
    {
      if (xmlhttp5.readyState == 4 && xmlhttp5.status == 200) 
      {
          var myArr = xmlhttp5.responseText;
          var text = myArr;
          jsonMuseums = JSON.parse(text);
          createmarkersMuseums();
      }
    };

    function createmarkersMuseums()
    {
      for (var i = 0; i < jsonMuseums.length; i++)
      {
          var aux = jsonMuseums[i].the_geom.coordinates[1];
          var aux2 = jsonMuseums[i].the_geom.coordinates[0];
            var c1 = new coordinate(parseFloat(aux),parseFloat(aux2));
              markersMuseums.push( new google.maps.Marker({
              position:c1,
              map: map,
              icon: "http://drive.google.com/uc?export=view&id=0B4HRypZd-dwSbGlDUW1LNHJaeEJPdkxYdXFWT0F5Z3lLbk5j"
              })
              );        
      }
    }


}



function createResults(housesInRent){

  d3.select("#results2").selectAll("div").data(housesInRent.address).enter().append('div').attr('class', 'resultsVisible none').text(function(d){return d;});

}



function fireStsHandler()
{
  if(toggle1.checked)
  {
    for (var i = 0; i < markersFireStations.length; i++)
      {
        markersFireStations[i].setMap(map);
      }
  }
  else
  {
    for (var i = 0; i < markersFireStations.length; i++)
      {
        markersFireStations[i].setMap(null);
      }
  }

}
function carCentersHandler()
{
  if(toggle2.checked)
  {
    for (var i = 0; i < markersCareerCenters.length; i++)
      {
        markersCareerCenters[i].setMap(map);
      }
  }
  else
  {
    for (var i = 0; i < markersCareerCenters.length; i++)
      {
        markersCareerCenters[i].setMap(null);
      }
  }

}
function housesHandler()
{
  if(toggle3.checked)
  {
    for (var i = 0; i < housesInRent.marker.length; i++)
      {
        housesInRent.marker[i].setMap(map);
      }
    d3.select("#results2").selectAll("div").classed("resultsNone",false);
    d3.select("#results2").selectAll("div").classed("resultsVisible",true);
  }
  else
  {
    for (var i = 0; i < housesInRent.marker.length; i++)
      {
        housesInRent.marker[i].setMap(null);
      }
    d3.select("#results2").selectAll("div").classed("resultsNone",true);
    d3.select("#results2").selectAll("div").classed("resultsVisible",false);
  }

}
function artGalleriesHandler()
{
  if(toggle4.checked)
  {
    for (var i = 0; i < markersArtGalleries.length; i++)
      {
        markersArtGalleries[i].setMap(map);
      }
  }
  else
  {
    for (var i = 0; i < markersArtGalleries.length; i++)
      {
        markersArtGalleries[i].setMap(null);
      }
  }

}
function museumsHandler()
{
  if(toggle5.checked)
  {
    for (var i = 0; i < markersMuseums.length; i++)
      {
        markersMuseums[i].setMap(map);
      }
  }
  else
  {
    for (var i = 0; i < markersMuseums.length; i++)
      {
        markersMuseums[i].setMap(null);
      }
  }

}
distances = [];
var houses = [];
function distance(o,d){
  var service = new google.maps.DistanceMatrixService();

  service.getDistanceMatrix(
    {
      origins: [dir],
      destinations: [d],
      travelMode: 'DRIVING'
    }, callback);

 
  function callback(response, status) {
    distances = [];
    if (status == 'OK') {
      var origins = response.originAddresses;
      var destinations = response.destinationAddresses;

      for (var i = 0; i < origins.length; i++) {
        var results = response.rows[i].elements;
        for (var j = 0; j < results.length; j++) {
          var element = results[j];
          var distance = element.distance.text;
          distances.push(distance);
          var from = origins[i];
          var to = destinations[j];
        }
      }
    }
  }
}
function getXMLDistance(address)
{
  var xml;
  var latLng;
  var distan;
  for (var i =0; i< housesInRent.xml.length;i++)
  {
    if(housesInRent.address[i]==address)
    {
      xml = housesInRent.xml[i];
      latLng = housesInRent.latLng[i];
      distan = housesInRent.distance[i];
    }
  }
  return [xml,latLng,distan];
}
/*function getCheapestOption()
{
  if(document.getElementById("filter1").checked)
  { 
    cheapestOption = 0;
    min = 99999999;
    for(var i = 0; i<housesInRent.cost.length;i++)
    {
      if(parseInt(housesInRent.cost[i])<min)
      {
        min = parseInt(housesInRent.cost[i]);
        cheapestOption = i;
        housesInRent.marker[i].setMap(null);
      }
    }
    addressCheapestOption = housesInRent.address[i];
    cheapestOption = getXMLDistance(addressCheapestOption);
      createResults(cheapestOption);
      housesInRent.marker[i].setMap(map);
      

  }
  else{
    createResults(housesInRent);
    for (var i = 0; i < housesInRent.marker.length; i++)
      {
        housesInRent.marker[i].setMap(map);
      }
    d3.select("#results2").selectAll("div").classed("resultsNone",false);
    d3.select("#results2").selectAll("div").classed("resultsVisible",true);
  }

}*/



document.querySelector("#summaryDeployment").onclick = function(){

  document.querySelector("#deployment").classList.toggle("show");
  $("div").click(function(event) {
    event.stopPropagation();
  });
}

$(document).ready(function(){
  $('#results2').on('click','div',function(){
    d3.select('#details').classed('details',true);
    //d3.select('#details2').append('div').text($(this).text());
    d3.select('#addressValue').text($(this).text());
    var aux = getXMLDistance($(this).text());
    var cost = aux[0].getElementsByTagName("rentzestimate")[0].firstChild.innerHTML;
    d3.select('#costValue').text(cost);

    d3.select('#distanceValue').text(aux[2]);
  })
})

$(document).ready(function(){
  $('#details2').on('click','button',function(){
    d3.select('#details').classed('details',false);
    //d3.select('#details2').select('div').remove();
  })
})

document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('#toggle1').addEventListener('change', fireStsHandler);
      document.querySelector('#toggle2').addEventListener('change', carCentersHandler);
      document.querySelector('#toggle3').addEventListener('change', housesHandler);
      document.querySelector('#toggle4').addEventListener('change', artGalleriesHandler);
      document.querySelector('#toggle5').addEventListener('change', museumsHandler);
      //document.querySelector('#filter1').addEventListener('change',getCheapestOption)
});
