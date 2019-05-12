import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const ShowHideArea = ({ isVisible, inLine, children }) => (
  <div
    className={
      (isVisible && inLine && style.visibleInLine) ||
      (isVisible && style.visibleBlock) ||
      style.hidden
    }
  >
    {children}
  </div>
);

ShowHideArea.propTypes = {
  children: PropTypes.any.isRequired,
  isVisible: PropTypes.bool.isRequired,
  inLine: PropTypes.bool
};

ShowHideArea.defaultProps = {
  inLine: false
};

export default ShowHideArea;