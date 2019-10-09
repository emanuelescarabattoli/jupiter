import React from "react";

import style from "./style.scss";

const List = ({ registers, onClickEdit, onClickNew }) => (
  <>
    <span className={style.button} onClick={onClickNew}>New</span>
    <ul className={style.list}>
      {
        registers.map(register => (
          <li className={style.item} key={register.id}>
            <span className={style.action} onClick={() => onClickEdit(register.id)}>Edit</span>
            <span>{register.description}</span>
          </li>
        ))
      }
    </ul>
  </>
);

export default List;
