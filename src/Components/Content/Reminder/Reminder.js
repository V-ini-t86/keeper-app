import React from "react";
import { useStateValue } from "../../../StateProvider";
import Card from "../Card/Card";
import classes from "./Reminder.module.css";
function Reminder() {
  const [{ remind }] = useStateValue();
  return (
    <div className={classes.remind}>
      {remind &&
        remind.map((notes) => {
          return (
            <div className={classes.remindCard}>
              <Card data={notes} />
            </div>
          );
        })}
    </div>
  );
}

export default Reminder;
