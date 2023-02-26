import { configureStore } from "@reduxjs/toolkit";
import locationsReducer from "../features/location/LocationSlice";

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
  },
});
