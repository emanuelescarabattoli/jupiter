import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const Search = () => (
  <div className={style.wrapper}>
    <i className={`${style.icon} material-icons-outlined`}>search</i>
    <input placeholder="" className={style.input}/>
  </div>
);

Search.propTypes = {
  children: PropTypes.any.isRequired
};

export default Search;