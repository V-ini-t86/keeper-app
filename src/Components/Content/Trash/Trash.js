import React, { useRef, useEffect } from "react";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import { useStateValue } from "../../../StateProvider";
import Card from "../Card/Card";
import classes from "./Trash.module.css";

function Trash() {
  const [{ trash }] = useStateValue();
  const masonRef = useRef();

  useEffect(() => {
    if (masonRef.current) {
      masonRef.current.style.padding = "10px 10px 100px 20px";
      masonRef.current.style.margin = "10px";
    }
  }, []);
  return (
    <div className={classes.trash}>
      {/* {trash &&
        trash.map((notes) => {
          return (
            <div className={classes.trashCard}>
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
          {trash &&
            trash.map((notes) => {
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

export default Trash;
