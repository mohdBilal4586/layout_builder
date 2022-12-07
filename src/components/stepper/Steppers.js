import React from "react";
import { Stepper } from "@mui/material";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepIcons from "./StepIcons";
import { useSelector } from "react-redux";

const Steppers = () => {
  const step = useSelector((state) => state.stepper.activeStep);
  return (
    <Stepper style={{ border: "none" }} activeStep={step} alternativeLabel>
      <Step style={{ border: "none", padding: "0 100px", marginTop: "2rem" }}>
        <StepLabel StepIconComponent={StepIcons}></StepLabel>
      </Step>
      <Step style={{ border: "none", padding: "0 100px", marginTop: "2rem" }}>
        <StepLabel StepIconComponent={StepIcons}></StepLabel>
      </Step>
      <Step style={{ border: "none", padding: "0 100px", marginTop: "2rem" }}>
        <StepLabel StepIconComponent={StepIcons}></StepLabel>
      </Step>
    </Stepper>
  );
};

export default Steppers;
