import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import style from "./style.scss";

const Container = ({ children, location }) => (
  <div className={style.container}>
    <div className={style.sidebar}>
      <ul className={style.menu}>
        <li className={style.item}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={style.item}>
          <Link to="/registers">Registers</Link>
        </li>
        <li className={style.item}>
          <Link to="/statistics">Statistics</Link>
        </li>
      </ul>
    </div>
    <div>
      <div className={style.header}>
        <span className={style.title}>
          {location.pathname.substr(1).replace("/", " > ") || "Dashboard"}
        </span>
      </div>
      <div className={style.content}>
        {children}
      </div>
    </div>
  </div >
);

Container.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(Container);
