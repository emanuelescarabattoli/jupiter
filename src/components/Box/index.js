import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const Box = ({ description, value, note }) => (
  <div className={style.wrapper}>
    <div className={value > 0 ? style.headerPositive : style.headerNegative}>
      <span className={style.description}>{description}</span>
      <span className={style.value}>
        {value}
        {
          value > 0
            ? <i className="fas fa-chevron-up fa-spacing-small-left" />
            : <i className="fas fa-chevron-down fa-spacing-small-left" />
        }
      </span>
    </div>
    <div className={style.content}>
      <span>{note || "No note found"}</span>
    </div>
  </div>
);

Box.propTypes = {
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  note: PropTypes.string.isRequired
};

export default Box;