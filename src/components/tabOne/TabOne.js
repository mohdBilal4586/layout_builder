import React from "react";
import CheckBox from "../UI/CheckBox";
import RadioButton from "../UI/RadioButton";
import SwitchTag from "../UI/SwitchTag";
import classes from "./TabOne.module.css";

const TabOne = () => {
  return (
    <section className={classes.tabOne}>
      <CheckBox />
      <RadioButton />
      <SwitchTag />
    </section>
  );
};

export default TabOne;
