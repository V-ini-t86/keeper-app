import React, { useRef, useEffect } from "react";
import { useStateValue } from "../../../StateProvider";
// import { Masonry, MasonryItem } from "@mui/lab";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import Card from "../Card/Card";
import Form from "../Form/Form";
import classes from "./Notes.module.css";
import "./Notes.css";

function Notes() {
  const [initialState] = useStateValue();
  const masonRef = useRef();

  useEffect(() => {
    if (masonRef.current) {
      masonRef.current.style.padding = "20px 20px 100px 20px";
    }
  }, []);

  return (
    <div>
      <Form />
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Masonry
          ref={masonRef}
          className={classes.mason}
          columns={4}
          spacing={2}
        >
          {initialState.note &&
            initialState.note.map((notes) => {
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

export default Notes;
