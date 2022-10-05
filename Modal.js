import React, { useEffect } from "react";

const Modal = ({ modalContent, removeModal, modalColor }) => {
  //console.log(modalColor);
  useEffect(() => {
    setTimeout(() => {
      removeModal();
    }, 3000);
  });
  return (
    <div style={{ background: modalColor }} classname="modal">
      <center>
        <h4>{modalContent}</h4>
      </center>
    </div>
  );
};
export default Modal;
