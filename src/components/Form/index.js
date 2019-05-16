import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const Form = ({ children }) => (
  <div className={style.wrapper}>
    {children}
  </div>
);

Form.propTypes = {
  children: PropTypes.any.isRequired
};

export default Form;