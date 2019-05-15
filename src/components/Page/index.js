import React from "react";
import PropTypes from "prop-types";

import style from "./style.scss";


const Menu = ({ items }) => (
  <ul className={style.menuItems}>
    {
      items.map(item => (
        <li key={item.id}>
          <div className={style.menuItemIcon}>
            <i className="material-icons-outlined">{item.icon}</i>
          </div>
          <div className={style.menuItemLabel}>
            {item.label}
          </div>
          <div className={style.menuItemActions}>
            <ul>
              {
                item.actions.map(action => (
                  <li key={action.id}>
                    <i className="material-icons-outlined">{action.icon}</i>
                  </li>
                ))
              }
            </ul>
          </div>
        </li>
      ))
    }
  </ul>
);

const NavbarItem = ({ icon, label }) => (
  <div className={style.navbarItem}>
    <div className={style.navbarItemIcon}>
      <i className="material-icons-outlined">{icon}</i>
    </div>
    <div className={style.navbarItemLabel}>
      <span>{label}</span>
    </div>
  </div>
);

const NavbarButton = ({ icon }) => (
  <div className={style.navbarButton}>
    <div className={style.navbarButtonIcon}>
      <i className="material-icons-outlined">{icon}</i>
    </div>
  </div>
);

const NavbarLink = ({ icon, label }) => (
  <div className={style.navbarLink}>
    <div className={style.navbarLinkIcon}>
      <i className="material-icons-outlined">{icon}</i>
    </div>
    <div className={style.navbarLinkLabel}>
      <span>{label}</span>
    </div>
  </div>
);

const Page = ({ children, icon, title }) => (
  <div className={style.wrapper}>
    <div className={style.sidebar}>
      <div className={style.logo}>
        <div className={style.logoIcon}>
          <i className="fas fa-globe"></i>
        </div>
        <div className={style.logoText}>
          <span>jupiter</span>
        </div>
      </div>
      <div className={style.menu}>
        <span>main menu</span>
        <Menu items={[
          {
            id: "dashboard",
            icon: "dashboard",
            label: "dashboard",
            actions: []
          },
          {
            id: "registers",
            icon: "toll",
            label: "registers",
            actions: [
              {
                id: "registerAdd",
                icon: "add"
              }
            ]
          },
          {
            id: "statistics",
            icon: "insert_chart",
            label: "statistics",
            actions: [
              {
                id: "statisticsAdd",
                icon: "add"
              }
            ]
          },
        ]} />
        <span>account</span>
        <Menu items={[
          {
            id: "logout",
            icon: "exit_to_app",
            label: "logout",
            actions: []
          },
        ]} />
      </div>
    </div>
    <div>
      <div className={style.navbar}>
        <div className={style.navbarLeft}>
          <NavbarItem icon={icon} label={title} />
          <NavbarButton icon="refresh" />
          <NavbarButton icon="cloud_download" />
        </div>
        <div className={style.navbarRight}>
          <NavbarButton icon="notifications" />
          <NavbarLink icon="account_circle" label="account" />
          <NavbarLink icon="exit_to_app" label="logout" />
        </div>
      </div>
      <div className={style.content}>
        {children}
      </div>
    </div>
  </div>
);

Page.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired
};

export default Page;
