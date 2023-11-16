import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

import Button from "./Button";

const ConfirmModal = forwardRef(function ConfirmModal({ children, onConfirm }, ref) {
  const modalRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        modalRef.current.showModal();
      },
    };
  });

  function confirmHandler() {
    onConfirm();
    modalRef.current.close();
  }

  return createPortal(
    <dialog
      ref={modalRef}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              autoFocus
            >
              Cancel
            </button>
          </li>
          <li>
            <Button type="button" onClick={confirmHandler}>Confirm</Button>
          </li>
        </menu>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default ConfirmModal;
