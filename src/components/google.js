import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyA82ZziPgwHtv0X8rqubX1StAc0j4rO2aU">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapContainer;
