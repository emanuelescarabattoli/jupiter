import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


export const Modal = ({ children }) => (
  <div className={style.wrapper}>
    <div className={style.modal}>
      {children}
    </div>
  </div>
);

export const ModalHeader = ({ children }) => (
  <div className={style.header}>
    {children}
  </div>
);

export const ModalBody = ({ children }) => (
  <div className={style.body}>
    {children}
  </div>
);

Modal.propTypes = {
  children: PropTypes.any.isRequired
};