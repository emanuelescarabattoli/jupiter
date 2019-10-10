import React from "react";

import style from "./style.scss";

const List = ({ registers, onClickShow, onClickNew }) => (
  <>
    <span className={style.button} onClick={onClickNew}>New</span>
    <ul className={style.list}>
      {
        registers.map(register => (
          <li className={style.item} key={register.id}>
            <span className={style.action} onClick={() => onClickShow(register.id)}>Show</span>
            <span>{register.description}</span>
          </li>
        ))
      }
    </ul>
  </>
);

export default List;
