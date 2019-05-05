import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const Button = ({ disabled, onClick, children, fullWidth, light }) => (
  <button
    className={`${light ? style.light : style.button} ${fullWidth ? style.fullWidth : undefined}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  light: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  fullWidth: false,
  light: false,
};

export default Button;