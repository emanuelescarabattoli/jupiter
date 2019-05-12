import React from "react";
import PropTypes from "prop-types";


import style from "./style.scss";


const Table = ({ columns, data }) => (
  <div className={style.wrapper}>
    <table>
      <thead>
        <tr>
          {
            columns.map(column => <th key={column.value} width={`${column.size}%`}>{column.label}</th>)
          }
        </tr>
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

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};

export default Table;