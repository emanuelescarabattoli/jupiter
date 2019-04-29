import React from "react";

import Table from "../../../components/Table";


const Detail = ({ loading, onChangeRegisterDetail, registerDetail }) => (
  <Table
    columns={columns}
    data={registers}
  />
);

export default Detail;