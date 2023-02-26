import React from "react";
import Map from "./features/maps/Map";
import AutocompleteForm from "./features/autocompleteform/AutocompleteForm";
import Location from "./features/location/Location";
import "./App.css";
import { LoadScript } from "@react-google-maps/api";
import { Container, Grid } from "@mui/material";
import { LIBRARIES } from "./utils/mapLibraries";

function App() {
  const librariez = LIBRARIES;

  return (
    <div className="App">
      <header className="App-header">
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
          libraries={librariez}
        >
          <Container fixed sx={{ padding: "10px" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <AutocompleteForm />
                <Location />
              </Grid>
              <Grid item xs={6}>
                <Map />
              </Grid>
            </Grid>
          </Container>
        </LoadScript>
      </header>
    </div>
  );
}

export default App;
