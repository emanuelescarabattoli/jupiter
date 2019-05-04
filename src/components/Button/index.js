import React from "react";

import style from "./style.scss";


const Button = ({ disabled, onClick, children, fullWidth, light }) => (
  <button
    disabled={disabled}
    className={`${light ? style.light : style.button} ${fullWidth ? style.fullWidth : undefined}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;