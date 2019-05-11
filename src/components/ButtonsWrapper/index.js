import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const ButtonsWrapper = ({ children }) => (
  <div className={style.wrapper}>
    {children}
  </div>
);

ButtonsWrapper.propTypes = {
  children: PropTypes.any.isRequired
};

export default ButtonsWrapper;