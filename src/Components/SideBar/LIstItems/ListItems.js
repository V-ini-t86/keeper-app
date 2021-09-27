import React from "react";
import classes from "./ListItem.module.css";
import { Link } from "react-router-dom";
import {
  DeleteRounded,
  ArchiveOutlined,
  AddAlertOutlined,
  Note,
} from "@material-ui/icons";
import { useState } from "react";
function ListItems() {
  const [colorRed, setColorRed] = useState(true);
  const [reminder, setReminder] = useState(false);
  const [archive, setArchive] = useState(false);
  const [trash, setTrash] = useState(false);

  const inboxHandler = () => {
    setColorRed(true);
    setArchive(false);
    setReminder(false);
    setTrash(false);
  };

  return (
    <div className={classes.listItem}>
      <ul className={classes.ul}>
        <Link
          className={classes.link}
          to="/"
          style={{
            fontSize: colorRed && "20px",
          }}
          onClick={inboxHandler}
        >
          <li>
            {" "}
            <Note className={classes.svg} fontSize="medium" /> Notes
          </li>
        </Link>
        <Link
          onClick={() => {
            setColorRed(false);
            setReminder(true);
            setArchive(false);
            setTrash(false);
          }}
          className={classes.link}
          style={{
            fontSize: reminder && "20px",
          }}
          to="/reminders"
        >
          <li>
            {" "}
            <AddAlertOutlined fontSize="medium" /> Reminders
          </li>
        </Link>
        <Link
          onClick={() => {
            setArchive(true);
            setColorRed(false);
            setReminder(false);
            setTrash(false);
          }}
          className={classes.link}
          to="/archive"
          style={{
            fontSize: archive && "20px",
          }}
        >
          <li>
            {" "}
            <ArchiveOutlined fontSize="medium" /> Archive
          </li>
        </Link>
        <Link
          onClick={() => {
            setTrash(true);
            setColorRed(false);
            setReminder(false);
            setArchive(false);
          }}
          className={classes.link}
          to="/trash"
          style={{
            fontSize: trash && "20px",
          }}
        >
          <li>
            {" "}
            <DeleteRounded fontSize="medium" /> Trash
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default ListItems;
