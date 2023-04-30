
import React, { useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

const LeafletGeocoder = () => {
    const [currentMarker, setCurrentMarker] = useState(null);
    const map = useMap();
  
    useEffect(() => {
      const geocoder = L.Control.geocoder({
        defaultMarkGeocode: false,
      })
        .on("markgeocode", function (e) {
          const latlng = e.geocode.center;
          console.log(latlng);
  
          if (currentMarker) {
            currentMarker.removeFrom(map);
          }
  
          const marker = L.marker(latlng, { draggable: true })
            .addTo(map)
            .bindPopup(e.geocode.name)
            .openPopup();
  
          setCurrentMarker(marker);
  
          if (e.geocode && e.geocode.bbox) {
            map.fitBounds(e.geocode.bbox);
          }
        })
        .addTo(map);
  
      return () => {
        if (geocoder.removeFrom && typeof geocoder.removeFrom === "function") {
          geocoder.removeFrom(map);
        }
      };
    }, [currentMarker, map]);
  
    return null;
  };
  
  export default LeafletGeocoder;
  
  
  
  
  
  
  