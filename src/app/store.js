import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import locationsReducer from "../features/location/LocationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    locations: locationsReducer,
  },
});
