import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


export const Modal = ({ children, isVisible }) => (
  <div className={isVisible ? style.wrapperVisible : style.wrapperHidden}>
    <div className={style.modal}>
      {children}
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export const ModalHeader = ({ children }) => (
  <div className={style.modalHeader}>
    {children}
  </div>
);

ModalHeader.propTypes = {
  children: PropTypes.any.isRequired
};

export const ModalHeaderLeft = ({ children }) => (
  <div className={style.modalHeaderLeft}>
    <h4>{children}</h4>
  </div>
);

ModalHeader.propTypes = {
  children: PropTypes.any.isRequired
};

export const ModalHeaderRight = ({ children }) => (
  <div className={style.modalHeaderRight}>
    {children}
  </div>
);

ModalHeader.propTypes = {
  children: PropTypes.any.isRequired
};

export const ModalBody = ({ children }) => (
  <div className={style.modalBody}>
    {children}
  </div>
);

ModalBody.propTypes = {
  children: PropTypes.any.isRequired
};