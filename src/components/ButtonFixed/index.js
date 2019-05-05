import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const ButtonFixed = ({ disabled, onClick, children }) => (
  <button
    disabled={disabled}
    className={style.button}
    onClick={onClick}
  >
    {children}
  </button>
);

ButtonFixed.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool
};

ButtonFixed.defaultProps = {
  disabled: false
};

export default ButtonFixed;