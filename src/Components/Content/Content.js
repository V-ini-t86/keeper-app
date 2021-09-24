import React from "react";
import classes from "./Content.module.css";
import { Route, Switch } from "react-router-dom";
import Notes from "./Notes/Notes";
import Archive from "./Archive/Archive";
import Trash from "./Trash/Trash";
import Reminder from "./Reminder/Reminder";

function Content() {
  return (
    <div className={classes.container}>
      <Switch>
        <Route path="/reminders">
          <Reminder />
        </Route>
        <Route path="/archive">
          <Archive />
        </Route>
        <Route path="/trash">
          <Trash />
        </Route>
        <Route path="/">
          <Notes />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
