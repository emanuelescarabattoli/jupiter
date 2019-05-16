import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const Button = ({ disabled, onClick, label, icon }) => (
  <button className={style.button} onClick={onClick}>
    <div className={style.buttonIcon}>
      <i className="material-icons-outlined">{icon}</i>
    </div>
    <div className={style.buttonLabel}>
      <span>{label}</span>
    </div>
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;