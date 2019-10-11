import React from "react";

import style from "./style.scss";

const Details = ({
  values,
  onChange,
  onSubmit,
  isOnEdit,
  onClickEdit
}) => (
  <div className={style.wrapper}>
    <input disabled={!isOnEdit} className={style.input} type="text" name="description" placeholder="Description" value={values.description} onChange={onChange} />
    <input disabled={!isOnEdit} className={style.input} type="text" name="note" placeholder="Note" value={values.note} onChange={onChange} />
    {
      isOnEdit && <button className={style.button} onClick={onSubmit}>Submit</button> ||
      !isOnEdit && <button className={style.button} onClick={onClickEdit}>Edit</button>
    }
  </div>
);

export default Details;
