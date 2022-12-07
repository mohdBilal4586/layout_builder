import React from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FormControlLabel from "@mui/material/FormControlLabel";
import classes from "./CheckBox.module.scss";

const CheckBox = () => {
  const label = ["Left", "Right", "Center", "Disable"];
  return (
    <>
      <span>I want a Company logo</span>
      <div className={classes.wrapper}>
        {label.map((item) => (
          <FormControlLabel
            label={item}
            control={
              <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleOutlineIcon />}
              />
            }
          />
        ))}
      </div>
    </>
  );
};

export default CheckBox;
