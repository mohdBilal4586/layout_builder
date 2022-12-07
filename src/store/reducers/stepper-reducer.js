import { createSlice } from "@reduxjs/toolkit";

const stepperSlice = createSlice({
  name: "stepper",
  initialState: { activeStep: 0 },
  reducers: {
    handleNextStep(state, action) {
      if (state.activeStep === 3) {
        return;
      }
      state.activeStep = state.activeStep + 1;
    },
    handleBackStep(state, action) {
      if (state.activeStep === -1) {
        return;
      }
      state.activeStep = state.activeStep - 1;
    },
  },
});

export const stepperAction = stepperSlice.actions;
export default stepperSlice.reducer;
