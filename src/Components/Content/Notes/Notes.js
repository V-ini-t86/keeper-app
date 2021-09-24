import React from "react";
import { useStateValue } from "../../../StateProvider";
import Card from "../Card/Card";
import Form from "../Form/Form";
import classes from "./Notes.module.css";

function Notes() {
  const [initialState] = useStateValue();
  console.log(initialState);
  return (
    <div>
      <Form />
      <div className={classes.cards}>
        {initialState.note &&
          initialState.note.map((notes) => {
            return (
              <div className={classes.noteCard}>
                <Card data={notes} />{" "}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Notes;
