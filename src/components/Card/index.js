import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


export const Card = ({ children }) => (
  <div className={style.card}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.any.isRequired
};

export const CardHeader = ({ children }) => (
  <div className={style.cardHeader}>
    {children}
  </div>
);

CardHeader.propTypes = {
  children: PropTypes.any.isRequired
};

export const CardBody = ({ children }) => (
  <div className={style.cardBody}>
    {children}
  </div>
);

CardBody.propTypes = {
  children: PropTypes.any.isRequired
};

export const CardFooter = ({ children }) => (
  <div className={style.cardFooter}>
    {children}
  </div>
);

CardFooter.propTypes = {
  children: PropTypes.any.isRequired
};