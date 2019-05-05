import React from "react";
import PropTypes from "prop-types";

import { Grid, Col } from "../Grid";
import Button from "../Button";

import style from "./style.scss";


const Page = ({ children, title }) => (
  <div className={style.page}>
    <Grid>
      <Col size={3}>
        <div className={style.menu}>
          <h3 className={style.logo}><i className="fas fa-chart-pie fa-spacing" />Jupiter</h3>
          <Button fullWidth><i className="fas fa-plus fa-spacing" />New Register</Button>
          <span>Menu</span>
          <ul>
            <li>
              <i className="fas fa-tachometer-alt fa-spacing" />Dashboard
            </li>
            <li>
              <i className="fas fa-table fa-spacing" />Registers
            </li>
            <li>
              <i className="fas fa-calculator fa-spacing" />Statistics
            </li>
          </ul>
          <span>Account</span>
          <ul>
            <li>
              <i className="fas fa-sign-out-alt fa-spacing" />Logout
            </li>
          </ul>
        </div>
      </Col>
      <Col size={9}>
        <h3 className={style.title}>{title}</h3>
        {children}
      </Col>
    </Grid>
  </div>
);

Page.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired
};

export default Page;
