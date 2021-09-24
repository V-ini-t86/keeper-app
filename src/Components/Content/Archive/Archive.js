import React from "react";
import { useStateValue } from "../../../StateProvider";
import classes from "./Archive.module.css";
import Card from "../Card/Card";

function Archive() {
  const [initialState] = useStateValue();
  return (
    <div className={classes.archive}>
      {initialState.archive &&
        initialState.archive.map((notes) => {
          return (
            <div className={classes.archiveCard}>
              <Card data={notes} />
            </div>
          );
        })}
    </div>
  );
}

export default Archive;
