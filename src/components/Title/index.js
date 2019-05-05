import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const Title = ({ children, subtitle }) => (
  <div className={style.wrapper}>
    <h3>{children}</h3>
    {subtitle && <small>{subtitle}</small>}
  </div>
);

Title.propTypes = {
  children: PropTypes.any.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Title;