import React from "react";

import style from "./style.scss";


const FieldWrapper = ({ children }) => (
  <div className={style.wrapper}>
    {children}
  </div>
);

export default FieldWrapper;