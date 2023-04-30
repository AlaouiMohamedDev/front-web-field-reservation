import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine = () => {
  const [hasClicked, setHasClicked] = useState(false); // State variable to track if click has occurred
  let DefaultIcon = L.icon({
    iconUrl: "/car.png",
    iconSize: [30, 30],
  });
  const map = useMap();
  useEffect(() => {
    var marker1 = L.marker([31.630491792770226, -8.021628856658937], { icon: DefaultIcon }).addTo(
      map
    );
    const handleClick = function (e) {
      if (!hasClicked) {
        setHasClicked(true); // Set hasClicked to true to prevent further clicks
        console.log(e.latlng.lat, e.latlng.lng);
        L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
        L.Routing.control({
          waypoints: [
            L.latLng(31.630491792770226, -8.021628856658937),
            L.latLng(e.latlng.lat, e.latlng.lng),
          ],
          lineOptions: {
            styles: [
              {
                color: "green",
                weight: 4,
                opacity: 0.7,
              },
            ],
          },
          routeWhileDragging: false,
          geocoder: L.Control.Geocoder.nominatim(),
          addWaypoints: false,
          draggableWaypoints: false,
          fitSelectedRoutes: true,
          showAlternatives: true,
        })
          .on("routesfound", function (e) {
            e.routes[0].coordinates.forEach((c, i) => {
              setTimeout(() => {
                marker1.setLatLng([c.lat, c.lng]);
              }, 1000 * i);
            });
          })
          .addTo(map);
      }
    };
    map.on("click", handleClick); // Attach click event listener
    return () => {
      map.off("click", handleClick); // Remove click event listener on component unmount
    };
  }, [map, hasClicked]); // Include map and hasClicked in the dependencies array for proper effect behavior
  return null;
};

export default LeafletRoutingMachine;