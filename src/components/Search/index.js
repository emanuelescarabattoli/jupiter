import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const Search = () => (
  <div className={style.wrapper}>
    <div className={style.icon}>
      <i className="material-icons-outlined">search</i>
    </div>
    <div className={style.input}>
      <input />
    </div>
  </div>
);

Search.propTypes = {
  children: PropTypes.any.isRequired
};

export default Search;