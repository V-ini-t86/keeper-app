import React from "react";
import { useStateValue } from "../../../StateProvider";
import Card from "../Card/Card";
import classes from "./Trash.module.css";

function Trash() {
  const [{ trash }] = useStateValue();
  return (
    <div className={classes.trash}>
      {trash &&
        trash.map((notes) => {
          return (
            <div className={classes.trashCard}>
              <Card data={notes} />
            </div>
          );
        })}
    </div>
  );
}

export default Trash;
