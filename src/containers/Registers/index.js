import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import List from "./components/List";
import { QUERY_REGISTER_LIST } from "../../queries";

const Registers = () => {
  const { loading, error, data } = useQuery(QUERY_REGISTER_LIST);
  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>Error!</span>}
      {data && <List registers={data.listRegister}/>}
    </>
  );
};

export default withRouter(Registers);
