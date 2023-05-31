/**
 * The function returns a React component that renders a Leaflet map with a custom marker icon and a
 * popup.
 * @returns A React component that renders a Leaflet map with a custom marker icon and a popup.
 */
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const customIcon = L.icon({
  iconUrl: "/leaves.svg",
  iconSize: [22, 22],
});

export default function Map() {
  return (
    <MapContainer
      center={[52.509, 13.36]}
      zoom={13}
      style={{ height: "45vh", width: "100vw" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[52.509, 13.36]} icon={customIcon}>
        <Popup>Here we are!</Popup>
      </Marker>
    </MapContainer>
  );
}
