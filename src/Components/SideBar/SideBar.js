import React from "react";
import ListItems from "./LIstItems/ListItems";
import classes from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={classes.sidebar}>
      <ListItems />
    </div>
  );
}

export default SideBar;
