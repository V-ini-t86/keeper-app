import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import { ACTIONS } from "../../../reducer";
import { useStateValue } from "../../../StateProvider";
import Card from "../Card/Card";
import CardModal from "../CardModal/CardModal";
import Form from "../Form/Form";
// import CardModal from "../CardModal/CardModal";
import classes from "./Notes.module.css";

function Notes() {
  const [isOpen, setIsOpen] = useState(false);

  const [initialState, dispatch] = useStateValue();
  function showHandler() {
    setIsOpen(true);
  }
  function submitHandler(title, lists) {
    if (title.target.textContent || lists) {
      if (title.target.textContent.length !== 0 || lists.length !== 0) {
        dispatch({
          type: ACTIONS.ADD_NOTES,
          title: title.target.textContent,
          lists,
        });
      }
    }
  }

  return (
    <div onClick={submitHandler}>
      <Form handler={submitHandler} />
      {/* {isOpen && (
        <CardModal
          open={isOpen}
          setIsOpen={() => {
            setIsOpen(false);
            console.log(isOpen);
          }}
        />
      )} */}
      {/* <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <h1>hello</h1>
      </Modal> */}

      <div className={classes.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Notes;
