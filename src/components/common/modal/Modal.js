import React from "react";

import modalStyles from "./Modal.module.css";

function Modal(props) {
  return (
    <React.Fragment>
      <div className={modalStyles.backdrop} onClick={props.showModal} />
      <dialog open className={modalStyles.modalDialog}>
        {props.children}
      </dialog>
    </React.Fragment>
  );
}

export default Modal;
