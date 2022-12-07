import React from "react";
import classes from "./RadioButton.module.scss";

const RadioButton = () => {
  return (
    <>
      <span className={classes.sp1}>Preset Color</span>
      <div className={classes.wrapper}>
        <input
          className={classes.btn1}
          id="btn1"
          type="radio"
          name="age"
          value="30"
        />
        <label className={classes.label1} htmlFor="radio">
          Blue (#ff0000)
        </label>
        <input
          className={classes.btn2}
          id="btn2"
          type="radio"
          name="age"
          value="30"
        />
        <label className={classes.label2} htmlFor="radio">
          Red (#ff0000)
        </label>
      </div>
      <span className={classes.sp2}>
        Preset Apply only : Header Background, Button, Radio Button & Switch
      </span>
    </>
  );
};

export default RadioButton;
