import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const Modal = ({ children }) => (
  <div className={style.wrapper}>
    <div className={style.modal}>
      {children}
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.any.isRequired
};

export default Modal;