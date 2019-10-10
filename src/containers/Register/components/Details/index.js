import React from "react";

import style from "./style.scss";

const Details = ({ values, onChange, onSubmit, isOnEdit, onClickEdit }) => (
  <div className={style.wrapper}>
    <input disabled={!isOnEdit} className={style.input} type="text" name="description" placeholder="Description" value={values.description} onChange={onChange} />
    <input disabled={!isOnEdit} className={style.input} type="text" name="note" placeholder="Note" value={values.note} onChange={onChange} />
    {isOnEdit ? <button className={style.button} onClick={onSubmit}>Submit</button> : <button className={style.button} onClick={onClickEdit}>Edit</button>}
    {!isOnEdit && <span className={style.button} onClick={() => alert("new")}>New</span>}
    <ul className={style.list}>
      {
        values.registerrowSet.map(row => (
          <li className={style.item} key={row.id}>
            {!isOnEdit && <span className={style.action} onClick={() => alert("edit")}>Edit</span>}
            <span>{row.description}</span>
          </li>
        ))
      }
    </ul>
  </div>
);

export default Details;
