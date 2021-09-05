import {
  AddAlertOutlined,
  ArchiveOutlined,
  ImageOutlined,
  MoreVertRounded,
  PaletteOutlined,
} from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import classes from "./Form.module.css";

function Form({ handler }) {
  const [title, setTitle] = useState("");
  const [textArea, setTextField] = useState("");

  function titleHandler(e) {
    setTitle(e.target.value);
  }

  function descriptionHandler(e) {
    setTextField(e.target.textContent);
    console.log(textArea);
  }
  return (
    <div className={classes.mf}>
      <form
        id="my-form"
        onSubmit={(e) => {
          e.preventDefault();
          handler(title, textArea);
          setTitle("");
          setTextField("");
        }}
        className={classes.form}
      >
        <div className={classes.title}>
          <input
            type="text"
            onChange={titleHandler}
            value={title}
            placeholder="Title"
          />
          <button>
            <ImageOutlined fontSize="small" />
          </button>
        </div>
        <span
          className={classes.textarea}
          onChange={descriptionHandler}
          role="textbox"
          value={textArea}
          contenteditable="true"
        ></span>
        <div className={classes.svg}>
          <button>
            <AddAlertOutlined fontSize="small" />
          </button>
          <button>
            <PaletteOutlined fontSize="small" />
          </button>
          <button>
            <ImageOutlined fontSize="small" />
          </button>
          <button>
            <ArchiveOutlined fontSize="small" />
          </button>
          <button>
            <MoreVertRounded fontSize="small" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
