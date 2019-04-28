import React from "react";

import Table from "../../../components/Table";

import style from "./style.scss";


const columns = [
  {
    value: "id",
    label: "Id",
    size: "5"
  },
  {
    value: "description",
    label: "Description",
    size: "40"
  },
  {
    value: "note",
    label: "Note",
    size: "50"
  },
  {
    value: "amount",
    label: "Amount",
    size: "5"
  }
];

const List = ({ registers }) => (
  <Table
    columns={columns}
    data={registers}
  />
);

export default List;