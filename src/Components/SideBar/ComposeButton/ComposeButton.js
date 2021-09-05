import React from "react";
import classes from "./ComposeButton.module.css";
function ComposeButton() {
  return (
    <React.Fragment>
      <button className={classes.compose}>
        <img
          src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
          alt="plus"
        />
        <h4>Compose</h4>
      </button>
    </React.Fragment>
  );
}

export default ComposeButton;
