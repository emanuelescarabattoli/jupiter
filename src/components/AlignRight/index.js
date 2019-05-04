import React from "react";

import style from "./style.scss";


const AlignRight = ({ children }) => (
  <div className={style.wrapper}>
    {children}
  </div>
);

export default AlignRight;