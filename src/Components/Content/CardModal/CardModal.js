import React, { useRef } from "react";
import classes from "./CardModal.module.css";
import CardContent from "./CardContent";
import { ACTIONS } from "../../../reducer";
import { useStateValue } from "../../../StateProvider";

export default function CardModal({ open, setIsOpen, data }) {
  const desc = useRef();
  const titleRef = useRef();
  const [initialState, dispatch] = useStateValue();

  function submitHandler(e) {
    e.preventDefault();
    console.log(desc.current.innerText);
    if (desc.current.innerText || titleRef.current.innerText) {
      if (
        desc.current.innerText.length !== 0 ||
        titleRef.current.innerText.length !== 0
      ) {
        dispatch({
          type: ACTIONS.MODAL_EDITABLE,
          id: data.id,
          title: titleRef.current.innerText,
          lists: desc.current.innerText,
        });
      }
    }
  }
  return (
    <div>
      {open && (
        <CardContent isOpen={setIsOpen} submit={submitHandler}>
          <h3
            className={classes.modalH3}
            ref={titleRef}
            role="textbox"
            contenteditable="true"
          >
            {data.title}
          </h3>
          <ul
            className={classes.ul}
            ref={desc}
            role="textbox"
            contenteditable="true"
          >
            {!data.lists && <li>Type something</li>}
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
