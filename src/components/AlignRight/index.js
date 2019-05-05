import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const AlignRight = ({ children }) => (
  <div className={style.wrapper}>
    {children}
  </div>
);

AlignRight.propTypes = {
  children: PropTypes.any.isRequired
};

export default AlignRight;