import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const MessageError = ({ children }) => (
  <div className={style.wrapper}>
    <div>
      <div>
        <i className="fas fa-times"></i>
      </div>
    </div>
    <div>
      <b>Error!</b>
      <span>{children}</span>
    </div>
  </div>
);

MessageError.propTypes = {
  children: PropTypes.any.isRequired
};

export default MessageError;