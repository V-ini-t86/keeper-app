import React, { useRef, useEffect } from "react";
import { useStateValue } from "../../../StateProvider";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import Card from "../Card/Card";
import classes from "./Reminder.module.css";
function Reminder() {
  const [{ remind }] = useStateValue();
  const masonRef = useRef();

  useEffect(() => {
    if (masonRef.current) {
      masonRef.current.style.padding = "10px 10px 100px 20px";
      masonRef.current.style.margin = "10px";
    }
  }, []);
  return (
    <div className={classes.remind}>
      {/* {remind &&
        remind.map((notes) => {
          return (
            <div className={classes.remindCard}>
              <Card data={notes} />
            </div>
          );
        })} */}

      <div style={{ marginTop: "5px", marginBottom: "10px" }}>
        <Masonry
          ref={masonRef}
          className={classes.mason}
          columns={4}
          spacing={2}
        >
          {remind &&
            remind.map((notes) => {
              return (
                <MasonryItem key={notes.id}>
                  <div className={classes.noteCard}>
                    <Card data={notes} />
                  </div>
                </MasonryItem>
              );
            })}
        </Masonry>
      </div>
    </div>
  );
}

export default Reminder;
