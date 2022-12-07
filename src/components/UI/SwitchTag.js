import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const SwitchTag = () => {
  const labelText = [
    "I want a Header",
    "I want a Footer",
    "I want a Drawer Mode(requires Header or Footer)",
    "I want a left-side Drawer",
    "I want a right-side Drawer",
    "I want a navigation tabs (require Header)",
    "I want a Bottom Menu (require Footer)",
  ];
  return (
    <FormGroup>
      {labelText.map((lb) => (
        <FormControlLabel
          key={lb}
          control={<Switch defaultChecked />}
          label={lb}
        />
      ))}
    </FormGroup>
  );
};

export default SwitchTag;
