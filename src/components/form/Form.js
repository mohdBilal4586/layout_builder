import React from "react";
import Steppers from "../stepper/Steppers";
import TabOne from "../tabOne/TabOne";
import classes from "./Form.module.css";
import { useDispatch } from "react-redux";
import { stepperAction } from "../../store/reducers/stepper-reducer";
import { useSelector } from "react-redux";

const Form = () => {
  const step = useSelector((state) => state.stepper.activeStep);
  const dispatch = useDispatch();

  const forwardStepHandler = () => {
    dispatch(stepperAction.handleNextStep());
  };

  const backStepHandler = () => {
    dispatch(stepperAction.handleBackStep());
  };
  const showStep = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <h6>
              Welcome to Step
              {step + 1}
            </h6>
            <TabOne />
          </>
        );
      case 1:
        return (
          <>
            <h6>Welcome to Step {step + 1}</h6>
            <TabOne />
          </>
        );
      case 2:
        return (
          <>
            <h6>Welcome to Step {step + 1}</h6>
            <TabOne />
          </>
        );
      case 3:
        return (
          <>
            <h1>Thanks for the info!</h1>
          </>
        );
      default: {
        break;
      }
    }
  };
  return (
    <div className={classes["form-data"]}>
      <Steppers />
      <hr />
      {showStep(step)}
      <hr />
      <div className={classes.wrapper}>
        {step > 0 && (
          <button className={classes.backBtn} onClick={backStepHandler}>
            Back
          </button>
        )}
        {step < 3 && (
          <button className={classes.forwardBtn} onClick={forwardStepHandler}>
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
