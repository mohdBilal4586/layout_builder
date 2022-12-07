import { configureStore } from "@reduxjs/toolkit";
import stepperReducer from "./reducers/stepper-reducer";

const store = configureStore({
  reducer: {
    stepper: stepperReducer,
  },
});

export default store;
