import React, { useState, useRef } from "react";
import UIAutocompleteForm from "./UIAutocompleteForm";
import { Autocomplete } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import {
  addSelectedLocation,
  setSelectedLatLng,
} from "../location/LocationSlice";

const AutocompleteForm = () => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const [autocomplete, setAutocomplete] = useState("");

  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };

  const onPlaceChanged = () => {
    const location = {
      name: autocomplete.getPlace().formatted_address,
      lat: autocomplete.getPlace().geometry.location.lat(),
      lng: autocomplete.getPlace().geometry.location.lng(),
    };
    dispatch(addSelectedLocation(location));
    dispatch(setSelectedLatLng(location));
    formRef.current.value = "";
  };

  return (
    <div>
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <UIAutocompleteForm formRef={formRef} />
      </Autocomplete>
    </div>
  );
};

export default AutocompleteForm;
