import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";

export const Grid = ({ children }) => <div className={style.grid}>{children}</div>;

Grid.propTypes = {
  children: PropTypes.any.isRequired
};

export const Col = ({ children, size }) => <div className={style[`col-${size}`]}>{children}</div>;

Col.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.number.isRequired
};
