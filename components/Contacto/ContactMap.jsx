import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { mapStyles } from './mapStyles';
import {MapContainer} from './Contact.styles';

const containerStyle = {
  width: '100vw',
  height: '480px',
};

const center = {
  lat: -12.039349,
  lng: -77.085387,
};

const options = {
  styles: mapStyles,
};

function ContactMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  return (
    <>
    <MapContainer>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        options={options}
      ></GoogleMap>
    </MapContainer>
    </>
  );
}

export default ContactMap;

