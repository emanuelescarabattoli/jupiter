import React from "react";

import style from "./style.scss";

const Input = ({ value, onChange, placeholder, name, disabled }) => (
  <input
    type="text"
    onChange={onChange}
    placeholder={placeholder}
    className={style.input}
    value={value}
    name={name}
    disabled={disabled}
  />
);

export default Input;
