import React from "react";

import style from "./style.scss";


const Input = ({ type, name, label, placeholder, value, onChange }) => (
  <div className={style.wrapper}>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

Input.defaultProps = {
  placeholder: "Insert something..."
};

export default Input;