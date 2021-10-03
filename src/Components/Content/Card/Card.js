import React, { useState, useRef } from "react";
import {
  AspectRatio,
  CheckCircle,
  DeleteRounded,
  ArchiveOutlined,
} from "@material-ui/icons";
import classes from "./Card.module.css";
import CardModal from "../CardModal/CardModal";
import DropdownPallete from "./DropdownPallete/DropdownPallete";
import { useStateValue } from "../../../StateProvider";
import { ACTIONS } from "../../../reducer";
import SimpleSnackbar from "../SnackBar/SnackBar";
import { Chip, Tooltip } from "@material-ui/core";

import ReminderPallete from "./Reminder/ReminderPallete";
import { useLocation } from "react-router";

const svgFill = {
  fill: "black",
};

export default function Card({ data }) {
  const cardRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectNote, setSelectNote] = useState(false);
  const [clrs, setColors] = useState("");
  const [initialState, dispatch] = useStateValue();
  const [date, setDate] = useState();
  const location = useLocation();
  const archiveHandler = () => {
    if (location.pathname === "/archive") {
      dispatch({ type: ACTIONS.UNARCHIVE_GOES_TO_NOTE, data });
    } else {
      dispatch({ type: ACTIONS.ADD_TO_ARCHIVE, data });
    }
  };

  function showHandler() {
    setIsOpen(true);
  }
  function deleteHandler() {
    if (location.pathname === "/trash") {
      dispatch({ type: ACTIONS.REMOVE_FROM_WEB, data });
    } else {
      dispatch({ type: ACTIONS.ADD_TO_TRASH, data });
    }
  }

  function handleDelete() {
    setDate();
    data.remin = date;
  }

  return (
    <div
      className={classes.card}
      ref={cardRef}
      style={{
        background: clrs,
        borderColor: "#ccc",
        border:
          selectNote && initialState.allSelect.length > 0 && "2px solid black",
      }}
    >
      {isOpen && (
        <CardModal
          open={isOpen}
          data={data}
          setIsOpen={() => {
            setIsOpen(false);
          }}
        />
      )}

      <button
        onClick={() => {
          setSelectNote((prev) => !prev);
          if (!selectNote) {
            dispatch({ type: ACTIONS.ADD_TO_ALL_SELECT, id: data.id });
          } else {
            dispatch({ type: ACTIONS.REMOVE_FROM_SELECTED_NOTE, id: data.id });
          }
        }}
        type="button"
        className={classes.check}
      >
        <CheckCircle
          style={{
            fill: selectNote && initialState.allSelect.length > 0 && "black",
          }}
          fontSize="small"
        />
      </button>
      <div className={classes.notes}>
        <div className={classes.title}>
          <h3>{data.title}</h3>
        </div>
        <ul className={classes.ul}>
          {data.lists &&
            data.lists.map((val, i) => {
              return <li key={i + 1}>{val}</li>;
            })}
        </ul>
      </div>
      {date && (
        <div className={classes.chip}>
          {" "}
          <Chip label={data.remin} onDelete={handleDelete} />
        </div>
      )}
      <div className={classes.hdiv}></div>

      <div className={classes.hide}>
        <div className={classes.svg}>
          <Tooltip title="Remind me">
            {/* <button>
              <AddAlertOutlined
                style={svgFill}
                className={classes.svgIcon}
                fontSize="small"
              />
            </button> */}
            <button>
              <ReminderPallete data={data} setDate={setDate} />
            </button>
          </Tooltip>

          <Tooltip title="Change color">
            <button>
              <DropdownPallete setColors={setColors} />
            </button>
          </Tooltip>

          {/* <Tooltip title="Image-Adder">
            <button>
              <ImageOutlined
                style={svgFill}
                className={classes.svgIcon}
                fontSize="small"
              />
            </button>
          </Tooltip> */}
          <Tooltip
            title={location.pathname !== "/archive" ? "Archive" : "UnArchive"}
          >
            <button onClick={archiveHandler}>
              <SimpleSnackbar Icon={ArchiveOutlined} note="Note Archived" />
            </button>
          </Tooltip>
          <Tooltip title="Show big">
            <button onClick={showHandler}>
              <AspectRatio style={svgFill} fontSize="small" />
            </button>
          </Tooltip>
          <Tooltip title="Delete">
            <button onClick={deleteHandler}>
              <DeleteRounded style={svgFill} fontSize="small" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
