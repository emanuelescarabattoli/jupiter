import React from "react";

import style from "./style.scss";

const Details = ({ values, onChange, onSubmit }) => (
  <div className={style.wrapper}>
    <input className={style.input} type="text" name="description" value={values.description} onChange={onChange} />
    <input className={style.input} type="text" name="note" value={values.note} onChange={onChange} />
  </div>
);

export default Details;
