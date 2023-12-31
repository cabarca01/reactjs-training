import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ openModal, onClose, children }) {
  const dialog = useRef();
  useEffect(() => {
    if (openModal) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [openModal]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {openModal ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}
