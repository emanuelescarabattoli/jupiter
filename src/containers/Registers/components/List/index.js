import React from "react";

import style from "./style.scss";

const List = ({ registers }) => (
  <ul className={style.menu}>
    {
      registers.map(register => (
        <li className={style.item} key={register.id}>
          <span>{register.description}</span>
        </li>
      ))
    }
  </ul>
);

export default List;
