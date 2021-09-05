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
};
const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 1000,
};
function CardContent({ children, isOpen }) {
  const modal = useRef();
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={isOpen} />
      <div ref={modal} id="no" style={MODAL_STYLES}>
        {children}
      </div>
    </>,
    document.getElementById("notes")
  );
}

export default CardContent;
