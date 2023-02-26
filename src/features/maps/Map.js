import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";

const Map = () => {
  const selectedLat = useSelector((state) => state.locations.selectedLat);
  const selectedLng = useSelector((state) => state.locations.selectedLng);

  const mapContainerStyle = {
    height: "400px",
    width: "100%",
    borderRadius: "8px",
  };

  const center = {
    lat: selectedLat || 3.1472732,
    lng: selectedLng || 101.6995352,
  };

  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    navigationControl: false,
    scaleControl: false,
    zoomControl: true,
  };

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  const position = {
    lat: selectedLat || 3.1472732,
    lng: selectedLng || 101.6995352,
  };

  return (
    <div>
      <GoogleMap
        id="searchbox-example"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
      >
        {selectedLat && selectedLng && (
          <Marker onLoad={onLoad} position={position} />
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;
