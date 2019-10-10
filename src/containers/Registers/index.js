import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import List from "./components/List";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage";
import { QUERY_REGISTER_LIST } from "../../queries";

const Registers = ({ history }) => {
  const { loading, error, data } = useQuery(QUERY_REGISTER_LIST);

  const onClickShow = id => history.push(`register/${id}`);

  const onClickNew = () => history.push("register");

  return (
    <>
      {loading && <LoadingMessage />}
      {error && <ErrorMessage />}
      {data && <List registers={data.listRegister} onClickShow={onClickShow} onClickNew={onClickNew} />}
    </>
  );
};

export default withRouter(Registers);
