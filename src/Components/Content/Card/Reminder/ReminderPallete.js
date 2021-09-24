import React from "react";
import { AddAlertOutlined } from "@material-ui/icons";
import classes from "./ReminderPallete.module.css";
import { makeStyles } from "@material-ui/core/styles";

import { TextField } from "@material-ui/core";
import { useStateValue } from "../../../../StateProvider";
import { ACTIONS } from "../../../../reducer";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
function ReminderPallete({ setDate, data, style, fontSize }) {
  const [initialState, dispatch] = useStateValue();
  const c = useStyles();
  const timeHandler = (e) => {
    data.remin = e.target.value;
    setDate(e.target.value);
    dispatch({ type: ACTIONS.ADD_TO_REMIND, data });
  };
  return (
    <div className={classes.dropdown}>
      <button>
        <AddAlertOutlined
          style={{ fill: style ? "blue" : "black" }}
          fontSize={fontSize ? fontSize : "small"}
        />
      </button>
      <div className={classes.dropdownContent}>
        <TextField
          id="date"
          type="date"
          className={c.textField}
          onChange={timeHandler}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </div>
  );
}

export default ReminderPallete;
