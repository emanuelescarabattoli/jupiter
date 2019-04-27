import React from "react";

import style from "./style.scss";


const Button = ({ disabled, onClick, children, fullWidth }) => (
  <button
    disabled={disabled}
    className={`${style.button} ${fullWidth ? style.fullWidth : undefined}`}
    onClick={onClick}
  >
    {children}
  </button>);

export default Button;