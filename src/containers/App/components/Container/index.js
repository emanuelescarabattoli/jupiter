import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import { Card, CardBody } from "../../../../components/Card";
import style from "./style.scss";

const Container = ({ children, location }) => (
  <div className={style.container}>
    <div className={style.sidebar}>
      <Card>
        <CardBody>
          <ul className={style.menu}>
            <li className={style.menuItem}>
              <Link to="/registers">Registers</Link>
            </li>
            <li className={style.menuItem}>
              <Link to="/statistics">Statistics</Link>
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
    <div>
      <div className={style.header}>
        <Card>
          <CardBody>
            <span className={style.title}>
              {location.pathname.substr(1).replace("/", " > ") || "Registers"}
            </span>
          </CardBody>
        </Card>
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
