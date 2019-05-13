import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


export const HeaderLeft = ({ children }) => (
  <div className={style.headerLeft}>
    {children}
  </div>
);


export const HeaderRight = ({ children }) => (
  <div className={style.headerRight}>
    {children}
  </div>
);

export const Header = ({ children }) => (
  <div className={style.header}>
    {children}
  </div>
);

Header.propTypes = {
  children: PropTypes.any.isRequired
};