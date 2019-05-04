import React from "react";

import style from "./style.scss";


const Title = ({ children, subtitle }) => (
  <div className={style.wrapper}>
    <h3>{children}</h3>
    {subtitle && <small>{subtitle}</small>}
  </div>
);

export default Title;