import React, { useRef } from "react";
import ReactDOM from "react-dom";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  zIndex: 1000,
  padding: "30px",
  backgroundColor: "#fff",
  transform: "translate(-50%,-50%)",
  minWidth: "400px",
  // height: "auto",
  borderRadius: "7px",
  maxHeight: "700px",
  // minHeight: "700px",
};
const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#202124",
  opacity: 0.6,
  zIndex: 1000,
};
function CardContent({ children, isOpen, submit }) {
  const modal = useRef();

  const submitHandler = (e) => {
    submit(e);
    isOpen(e);
  };
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={submitHandler} />
      <div ref={modal} id="no" style={MODAL_STYLES}>
        {children}
      </div>
    </>,
    document.getElementById("notes")
  );
}

export default CardContent;
