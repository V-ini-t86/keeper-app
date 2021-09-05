import React, { useState } from "react";
import {
  AddAlertOutlined,
  ArchiveOutlined,
  AspectRatio,
  CheckCircle,
  ImageOutlined,
  MoreVertRounded,
  PaletteOutlined,
} from "@material-ui/icons";
import classes from "./Card.module.css";
import CardModal from "../CardModal/CardModal";
import { Modal } from "@material-ui/core";
import DropdownPallete from "./DropdownPallete/DropdownPallete";

export default function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const [clrs, setColors] = useState("");

  function showHandler() {
    setIsOpen(true);
  }
  function hideHandler() {
    setIsOpen(false);
  }
  return (
    <div
      className={classes.card}
      style={{ background: clrs, borderColor: clrs !== "#fff" ? clrs : "#ccc" }}
      onClick={showHandler}
    >
      {/* <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={hideHandler}
      >
        <h1>hello</h1>
      </Modal> */}
      {/* {isOpen && (
        <CardModal
          open={isOpen}
          setIsOpen={() => {
            setIsOpen(false);
            console.log(isOpen);
          }}
        />
      )} */}

      <button type="button" className={classes.check}>
        <CheckCircle fontSize="small" />
      </button>
      <div className={classes.notes}>
        <div className={classes.title}>
          <h3>Title</h3>
        </div>
        <ul className={classes.ul}>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </ul>
      </div>

      <div className={classes.hdiv}></div>

      <div className={classes.hide}>
        <div className={classes.svg}>
          <button>
            <AddAlertOutlined fontSize="small" />
          </button>
          <button>
            <DropdownPallete setColors={setColors} />
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
          <button>
            <AspectRatio fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  );
}
