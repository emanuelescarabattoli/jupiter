import React from "react";

import Table from "../../../components/Table";

import style from "./style.scss";


const columns = [
  {
    value: "id",
    label: "Id",
    size: "100"
  },
  {
    value: "description",
    label: "Description",
    size: "100"
  },
  {
    value: "note",
    label: "Note",
    size: "200"
  }
];

const List = ({ registers }) => (
  <Table
    columns={columns}
    data={registers}
  />
);

export default List;