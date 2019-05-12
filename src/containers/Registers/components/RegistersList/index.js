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

const RegistersList = ({ registers }) => (
  <Table
    columns={columns}
    data={registers}
  />
);

RegistersList.propTypes = {
  registers: PropTypes.array.isRequired
};

export default RegistersList;