import React from "react";

import style from "./style.scss";

const List = ({ statistics, onClickShow, onClickNew }) => (
  <>
    <span className={style.button} onClick={onClickNew}>New</span>
    <ul className={style.list}>
      {
        statistics.map(statistic => (
          <li className={style.item} key={statistic.id}>
            <span className={style.action} onClick={() => onClickShow(statistic.id)}>Show</span>
            <span>{statistic.description}</span>
          </li>
        ))
      }
    </ul>
  </>
);

export default List;
