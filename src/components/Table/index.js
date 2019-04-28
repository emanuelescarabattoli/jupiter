import React from "react";

import style from "./style.scss";


const Table = ({ columns, data }) => (
  <div className={style.wrapper}>
    <table>
      <thead>
        {
          columns.map(column => <th key={column.value} width={`${column.size}%`}>{column.label}</th>)
        }
      </thead>
      <tbody>
        {
          data.map((record, index) => (
            <tr key={index}>
              {
                columns.map((column, index) => <td key={index}>{record[column.value] || "-"}</td>)
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

export default Table;