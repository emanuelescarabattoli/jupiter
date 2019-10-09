import React from "react";

import style from "./style.scss";

const Details = ({ values, onChange, onSubmit }) => (
  <div className={style.wrapper}>
    <input className={style.input} type="text" name="description" placeholder="Description" value={values.description} onChange={onChange} />
    <input className={style.input} type="text" name="note" placeholder="Note" value={values.note} onChange={onChange} />
    <button className={style.button} onClick={onSubmit}>Submit</button>
    <span className={style.button} onClick={() => alert("new")}>New</span>
    <ul className={style.list}>
      {
        values.registerrowSet.map(row => (
          <li className={style.item} key={row.id}>
            <span className={style.action} onClick={() => alert("edit")}>Edit</span>
            <span>{row.description}</span>
          </li>
        ))
      }
    </ul>
  </div>
);

export default Details;
