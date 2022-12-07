import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    padding: "5px",
    color: "#fff",
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    background: "#007fff",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    background: "#007fff",
  },
}));
const StepIcons = (props) => {
  const classes = style();

  const { active, completed } = props;
  const icons = {
    1: <EditIcon />,
    2: <SettingsIcon />,
    3: <PlayCircleOutlineIcon />,
  };
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
};
StepIcons.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};
export default StepIcons;
