import React from "react";

import style from "./style.scss";


export const Card = ({ children }) => (
  <div className={style.card}>
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className={style.cardHeader}>
    {children}
  </div>
);

export const CardBody = ({ children }) => (
  <div className={style.cardBody}>
    {children}
  </div>
);

export const CardFooter = ({ children }) => (
  <div className={style.cardFooter}>
    {children}
  </div>
);