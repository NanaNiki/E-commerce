import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
  

export default function Map() {
return (
   <MapContainer center={[52.509, 13.36]} zoom={13}  style={{ height: '30vh' }} scrollWheelZoom={false}>
   <TileLayer
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
   <Marker position={[52.509, 13.36]}>
   <Popup></Popup>
   </Marker>
 </MapContainer> 
)
}