import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedLatLng, removeSelectedLocation } from "./LocationSlice";
import { List, ListItem, ListItemText, Button } from "@mui/material";

const Location = () => {
  const dispatch = useDispatch();
  const selectedLocations = useSelector(
    (state) => state.locations.listSelectedLocations
  );

  const selectedLat = useSelector((state) => state.locations.selectedLat);
  const selectedLng = useSelector((state) => state.locations.selectedLng);

  const handleDelete = (index) => {
    dispatch(removeSelectedLocation(index));
  };

  return (
    <div>
      <p>Selected Locations:</p>
      <List>
        {selectedLocations.map((location, index) => (
          <ListItem
            key={index}
            onClick={() => dispatch(setSelectedLatLng(location))}
            sx={{
              cursor: "pointer",
              p: 0,
              backgroundColor:
                location.lat === selectedLat && location.lng === selectedLng
                  ? "#eee"
                  : "inherit",
            }}
          >
            <Button onClick={() => handleDelete(index)} sx={{ color: "red" }}>
              x
            </Button>
            <ListItemText primary={location.name} />
          </ListItem>
        ))}
      </List>
      <ul></ul>
    </div>
  );
};

export default Location;
