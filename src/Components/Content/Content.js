import React from "react";
import classes from "./Content.module.css";
import { Route, Switch } from "react-router-dom";
import Notes from "./Notes/Notes";

function Content() {
  return (
    <div className={classes.container}>
      <Switch>
        <Route path="/reminders">
          <h1>heloo</h1>
        </Route>
        <Route path="/">
          <Notes />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
