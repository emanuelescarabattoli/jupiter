import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const FieldWrapper = ({ children }) => (
  <div className={style.wrapper}>
    {children}
  </div>
);

FieldWrapper.propTypes = {
  children: PropTypes.any.isRequired
};

export default FieldWrapper;