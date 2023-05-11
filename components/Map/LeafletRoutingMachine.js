import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { getCookie } from "cookies-next";

const LeafletRoutingMachine = ({field}) => {
  const [longlat,setLongLat] = useState({
    lat:31.630491792770226,
    long:-8.021628856658937
  })

  console.log("---------------------->",field)

  useEffect(()=>{
    setLongLat({lat:getCookie('lat'),long:getCookie('long')})
    console.log('------=> longLat',longlat)
  },[getCookie('lat'),getCookie('long')])

  console.log(':( ---- ',field)

  let playerIcon = L.icon({
    iconUrl: "shoot.png",
    iconSize: [40, 40],
  });
  let fieldIcon = L.icon({
    iconUrl: "field.png",
    iconSize: [40, 40],
  });
  const map = useMap();
 const [remove,setRemove] = useState(0)

 function resetMap() {
  // Remove all layers from the map
  map.eachLayer(function (layer) {
      map.removeLayer(layer);
  });

  // Set the map's view to its initial state
  map.setView([51.505, -0.09], 13);
}

 
  useEffect(() => {


    // if(remove !=0)
    // {
    //   resetMap()
    //   setRemove(1)
    // }
    if(getCookie('lat'))
    {
      var  marker1= L.marker([longlat.lat, longlat.long], { icon: playerIcon }).addTo(
        map
      );

    }
    

     L.marker([field ? field.lat : longlat.lat  , field ? field.long : -8.021628856658937],{icon : fieldIcon}).addTo(map);

     if(getCookie('lat'))
     {

       var routtt=L.Routing.control({
            waypoints: [
              L.latLng(longlat.lat, longlat.long),
              L.latLng(field ? field.lat : longlat.lat  , field ? field.long : -8.021628856658937),
            ],
            line: {
              show: false // Hide the route text
            },
            lineOptions: {
              styles: [
                {
                  color: "#03C988",
                  weight: 3,
                  opacity: 0.7,
                },
              ],
            },
            routeWhileDragging: false,
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: true,
          })
            .addTo(map);
     }

      



    
  }, [map,field]); // Include map and hasClicked in the dependencies array for proper effect behavior
  return null;
};

export default LeafletRoutingMachine;
