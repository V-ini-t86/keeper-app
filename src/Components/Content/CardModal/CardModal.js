import React, { useState, useRef } from "react";
import classes from "./CardModal.module.css";
import CardContent from "./CardContent";
import { ACTIONS } from "../../../reducer";
import { useStateValue } from "../../../StateProvider";

export default function CardModal({ open, setIsOpen, data }) {
  // const [title, setTitle] = useState("");
  // const desc = useRef();
  // const [initialState, dispatch] = useStateValue();

  // function titleHandler(e) {
  //   setTitle(e.target.value);
  // }

  // function submitHandler(e) {
  //   e.preventDefault();
  //   console.log(desc.current);
  //   if (desc.current.innerText || title) {
  //     if (desc.current.innerText.length !== 0 || title.length !== 0) {
  //       // dispatch({
  //       //   type: ACTIONS.ADD_NOTES,
  //       //   title,
  //       //   lists: desc.current.innerText,
  //       // });
  //     }
  //   }
  //   desc.current.innerText = "";
  //   setTitle("");
  // }
  return (
    <div>
      {open && (
        <CardContent isOpen={setIsOpen}>
          <h3 className={classes.modalH3} role="textbox" contenteditable="true">
            {data.title}
          </h3>
          <ul className={classes.ul} role="textbox" contenteditable="true">
            <li>Type something</li>
            {data.lists.map((val) => {
              return <li>{val}</li>;
            })}
          </ul>
          {/* <p></p> */}
        </CardContent>
      )}
    </div>
  );
}
