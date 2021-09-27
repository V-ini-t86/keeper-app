import {
  AddAlertOutlined,
  ArchiveOutlined,
  ImageOutlined,
  MoreVertRounded,
  PaletteOutlined,
} from "@material-ui/icons";
import React, { useRef } from "react";
import { useState } from "react";
import { ACTIONS } from "../../../reducer";
import { useStateValue } from "../../../StateProvider";
import classes from "./Form.module.css";

function Form() {
  const [title, setTitle] = useState("");
  const desc = useRef();
  const [initialState, dispatch] = useStateValue();

  function titleHandler(e) {
    setTitle(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(desc.current);
    if (desc.current.innerText || title) {
      if (desc.current.innerText.length !== 0 || title.length !== 0) {
        dispatch({
          type: ACTIONS.ADD_NOTES,
          title,
          lists: desc.current.innerText,
        });
      }
    }
    desc.current.innerText = "";
    setTitle("");
  }
  return (
    <div className={classes.mf}>
      <form onSubmit={submitHandler} className={classes.form}>
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
          role="textbox"
          contentEditable="true"
          ref={desc}
        ></span>
        <div className={classes.finalBtn}>
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
          <button onClick={submitHandler} className="btn-notes">
            AddNotes
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
