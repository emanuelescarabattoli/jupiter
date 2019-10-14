import React from "react";

import style from "./style.scss";

const Select = ({ options, valueKey, labelKey, value, onChange, placeholder, name, disabled }) => (
  <div className={style.wrapper}>
    <select
      onChange={onChange}
      placeholder={placeholder}
      className={style.select}
      value={value[valueKey]}
      name={name}
      disabled={disabled}
    >
      <option value={undefined}>{placeholder}</option>
      {
        options.map(option => <option value={option[valueKey]} key={option[valueKey]}>{option[labelKey]}</option>)
      }
    </select>
  </div>
);

export default Select;
