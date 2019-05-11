import React from "react";
import PropTypes from "prop-types";

import Table from "../../../../components/Table";


const columns = [
  {
    value: "id",
    label: "Id",
    size: "5"
  },
  {
    value: "date",
    label: "Date",
    size: "40"
  },
  {
    value: "description",
    label: "Description",
    size: "40"
  },
  {
    value: "period",
    label: "Period",
    size: "50"
  },
  {
    value: "amount",
    label: "Amount",
    size: "5"
  }
];

const List = ({ items }) => (
  <Table
    columns={columns}
    data={items}
  />
);

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;