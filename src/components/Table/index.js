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
          data.map((record, recordIndex) => (
            <tr key={recordIndex}>
              {
                columns.map((column, columnIndex) => (
                  <td key={columnIndex}>
                    {
                      column.actions ? (
                        <div className={style.rowActions}>
                          {
                            column.actions.map((action, actionIndex) => <i key={actionIndex} className="material-icons-outlined">{action.icon}</i>)
                          }
                        </div>
                      ) : (
                        <span>{record[column.value] || "-"}</span>
                      )
                    }
                  </td>
                ))
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