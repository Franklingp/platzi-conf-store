import React from 'react';

//Leaflet map
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

//style
import '../styles/components/Map.css';

function Map({ location }) {
  return (
    <div id="mapid">
      {location ? (
        <MapContainer
          center={location}
          zoom={17}
          scrollWheelZoom={false}
          style={{ height: '500px' }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={location}>
            <Popup>
              Direccion de tu recidencia. <br /> 3 dias para entrega.
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div className="map-alt">
          <i className="fas fa-map-marker-alt map-alt-icon"></i>
        </div>
      )}
    </div>
  );
}

export default Map;
