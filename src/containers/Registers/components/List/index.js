import React from "react";

import style from "./style.scss";

const List = ({ registers, onClickEdit }) => (
  <ul className={style.menu}>
    {
      registers.map(register => (
        <li className={style.item} key={register.id}>
          <span className={style.action} onClick={() => onClickEdit(register.id)}>Edit</span>
          <span>{register.description}</span>
        </li>
      ))
    }
  </ul>
);

export default List;
