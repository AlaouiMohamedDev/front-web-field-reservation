import "leaflet/dist/leaflet.css"
import { MapContainer,TileLayer } from "react-leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import  './map.css'
import L from "leaflet"
import LeafletGeocoder from "./LeafletGeocoder"
import LeafletRoutingMachine from "./LeafletRoutingMachine";
import { useMemo } from "react";
import DraggableMarker from "./DraggableMarker";

function Map() {
    const position = [51.505, -0.09]


    return (
        <MapContainer className="w-full h-screen" center={position} zoom={16} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        <LeafletGeocoder />
        {/* <LeafletRoutingMachine /> */}
            {/* <DraggableMarker /> */}
      </MapContainer>
        );
    }
    let DefaultIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
      });
      L.Marker.prototype.options.icon = DefaultIcon;


export default Map;