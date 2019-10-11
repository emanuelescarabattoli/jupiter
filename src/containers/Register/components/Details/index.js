import React from "react";

import style from "./style.scss";

const Details = ({
  values,
  onChange,
  onSubmit,
  isOnEdit,
  onClickEdit,
  valuesRow,
  onChangeRow,
  onSubmitRow,
  isOnEditRow,
  onClickEditRow,
  onClickNewRow
}) => (
  <div className={style.wrapper}>
    <input disabled={!isOnEdit} className={style.input} type="text" name="description" placeholder="Description" value={values.description} onChange={onChange} />
    <input disabled={!isOnEdit} className={style.input} type="text" name="note" placeholder="Note" value={values.note} onChange={onChange} />
    {
      isOnEdit && <button className={style.button} onClick={onSubmit}>Submit</button> ||
      !isOnEdit && !isOnEditRow && <button className={style.button} onClick={onClickEdit}>Edit</button> ||
      isOnEditRow && undefined
    }
    {
      !isOnEdit && !isOnEditRow && <span className={style.button} onClick={onClickNewRow}>New</span>
    }
    <ul className={style.list}>
      {
        values.registerrowSet.map(row => (
          <li className={style.item} key={row.id}>
            {
              !isOnEdit && !isOnEditRow && <span className={style.action} onClick={() => onClickEditRow(row.id)}>Edit</span>
            }
            <span>{row.description}</span>
          </li>
        ))
      }
    </ul>
    {
      isOnEditRow &&
        <div className={style.wrapper}>
          <input className={style.input} type="text" name="date" placeholder="Date" value={valuesRow.date} onChange={onChangeRow} />
          <input className={style.input} type="text" name="description" placeholder="Description" value={valuesRow.description} onChange={onChangeRow} />
          <input className={style.input} type="text" name="period" placeholder="Period" value={valuesRow.period} onChange={onChangeRow} />
          <input className={style.input} type="text" name="amount" placeholder="Amount" value={valuesRow.amount} onChange={onChangeRow} />
          <input className={style.input} type="text" name="note" placeholder="Note" value={valuesRow.note} onChange={onChangeRow} />
          <button className={style.button} onClick={onSubmitRow}>Submit</button>
        </div>
    }
  </div>
);

export default Details;
