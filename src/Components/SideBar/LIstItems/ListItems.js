import React from "react";
import classes from "./ListItem.module.css";
import { GrStar } from "react-icons/gr";
import { BiAlarmSnooze, BiSend } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
function ListItems() {
  const [colorRed, setColorRed] = useState(false);
  const inboxHandler = () => {
    setColorRed(true);
  };

  return (
    <div className={classes.listItem}>
      <ul className={classes.ul}>
        <Link
          className={classes.link}
          to="/"
          style={{
            color: colorRed && "red",
          }}
          onClick={inboxHandler}
        >
          <li>
            {" "}
            <HiOutlineMail className={classes.svg} /> Notes
          </li>
        </Link>
        <Link
          onClick={() => setColorRed(false)}
          className={classes.link}
          to="/reminders"
        >
          <li>
            {" "}
            <GrStar className={classes.svg} /> Reminders
          </li>
        </Link>
        <Link
          onClick={() => setColorRed(false)}
          className={classes.link}
          to="/archive"
        >
          <li>
            {" "}
            <BiAlarmSnooze className={classes.svg} /> Archive
          </li>
        </Link>
        <Link
          onClick={() => setColorRed(false)}
          className={classes.link}
          to="/trash"
        >
          <li>
            {" "}
            <BiSend className={classes.svg} /> Trash
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default ListItems;
