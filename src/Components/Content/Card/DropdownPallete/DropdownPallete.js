import React, { useRef } from "react";
import { PaletteOutlined } from "@material-ui/icons";
import classes from "./DropdownPallete.module.css";

const colors = [
  { color: "#ffffff", arw: false },
  { color: "#f28b82", arw: false },
  { color: "#fbbc04", arw: false },
  { color: "#fff475", arw: false },
  { color: "#ccff90", arw: false },
  { color: "#a7ffeb", arw: false },
  { color: "#cbf0f8", arw: false },
  { color: "#aecbfa", arw: false },
  { color: "#d7aefb", arw: false },
  { color: "#fdcfe8", arw: false },
  { color: "#e6c9a8", arw: false },
  { color: "#e8eaed", arw: false },
];

function DropdownPallete({ setColors }) {
  return (
    <div className={classes.dropdown}>
      <button>
        <PaletteOutlined fontSize="small" />
      </button>
      <div className={classes.dropdownContent}>
        {colors.map((clrs) => {
          function colorHandler(e) {
            setColors(clrs.color);
            clrs.arw = !clrs.arw;

            e.target.style.border = "1px solid black";
          }

          return (
            <button
              onClick={colorHandler}
              style={{ background: clrs.color, border: "none" }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default DropdownPallete;
