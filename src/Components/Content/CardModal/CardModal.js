import React from "react";

import CardContent from "./CardContent";

export default function CardModal({ open, setIsOpen }) {
  return (
    <div>
      {open && (
        <CardContent isOpen={setIsOpen}>
          <h1>heloo</h1>
        </CardContent>
      )}
    </div>
  );
}
