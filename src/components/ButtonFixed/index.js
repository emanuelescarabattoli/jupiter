import React from "react";

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

export default ButtonFixed;