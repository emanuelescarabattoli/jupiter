import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";

import List from "./components/List";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage";
import { QUERY_REGISTER_LIST, MUTATION_REGISTER_DELETE, QUERY_REGISTER_DETAIL } from "../../queries";

const Registers = ({ history }) => {
  const { loading, error, data } = useQuery(QUERY_REGISTER_LIST);
  const [deleteRegister, deleteRegisterMutation] = useMutation(MUTATION_REGISTER_DELETE);

  const onClickShow = id => history.push(`register/${id}`);

  const onClickDelete = id => {
    if(confirm("Are you sure?")){
      deleteRegister({ variables: { pk: id }, refetchQueries: [{ query: QUERY_REGISTER_DETAIL }] });
    }
  };

  const onClickNew = () => history.push("register");

  return (
    <>
      {loading || deleteRegisterMutation.loading && <LoadingMessage />}
      {error || deleteRegisterMutation.error && <ErrorMessage />}
      {data && <List registers={data.listRegister} onClickShow={onClickShow} onClickNew={onClickNew} onClickDelete={onClickDelete} />}
    </>
  );
};

export default withRouter(Registers);
