import React from "react";
import { Portal } from "react-portal";
// import PropTypes from "prop-types";
import { useEffect } from "react";
import s from "./Modal.module.css";

// const modalRoot = document.getElementById("modal-root");

function Modal({ content, onBackdrop }) {
  // static propTypes = {
  //   onBackdrop: PropTypes.func.isRequired,
  //   content: PropTypes.string.isRequired,
  // };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onBackdrop();
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onBackdrop();
    }
  };

  return (
    <Portal>
      <div className={s.Overlay} onClick={handleBackdropClick}>
        <div className={s.Modal}>
          <img src={content} alt="" />
        </div>
      </div>
      , modalRoot
    </Portal>
  );
}

export default Modal;
