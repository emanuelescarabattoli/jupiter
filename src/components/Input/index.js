import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const Input = (
  {
    type,
    name,
    label,
    placeholder,
    value,
    onChange
  }
) => (
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

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  type: "text",
  placeholder: "Insert something..."
};

export default Input;