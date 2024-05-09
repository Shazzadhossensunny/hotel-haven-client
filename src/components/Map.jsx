import 'leaflet/dist/leaflet.css';
import {
    MapContainer,
    TileLayer,
  } from 'react-leaflet'
import { Marker, Popup } from 'react-leaflet';
export default function Map() {
  return (
    <div>
      <MapContainer center={[23.804693486833536, 90.41041631531532]} zoom={13} scrollWheelZoom={false} style={{height: 536}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[23.804693486833536, 90.41041631531532]}>
          <Popup>
            Dhaka,Bangladesh
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
