import React from "react";

import style from "./style.scss";

export const Table = ({ children }) => <table className={style.table}>{children}</table>;

export const TableHeader = ({ children }) => <thead className={style.tableHeader}>{children}</thead>;

export const TableBody = ({ children }) => <tbody className={style.tableBody}>{children}</tbody>;

export const TableRow = ({ children }) => <tr className={style.tableRow}>{children}</tr>;

export const TableCell = ({ children }) => <td className={style.tableCell}>{children}</td>;

export const TableFooter = ({ children }) => <tfoot className={style.tableFooter}>{children}</tfoot>;
