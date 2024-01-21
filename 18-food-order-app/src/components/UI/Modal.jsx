import "./Modal.css";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ keyId, open, className = "", children }) {
  const modalRef = useRef();
  const cssClasses = "modal " + className;

  useEffect(() => {
    if (open) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [open, keyId]);

  return createPortal(
    <dialog ref={modalRef} className={cssClasses}>
      {children}
    </dialog>,
    document.getElementById("modal"),
    keyId
  );
}
