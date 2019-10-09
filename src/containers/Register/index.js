import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import Details from "./components/Details";
import { QUERY_REGISTER_DETAIL } from "../../queries";

const Register = ({ history }) => {
  const { loading, error, data } = useQuery(QUERY_REGISTER_DETAIL, { variables: { id: 1 } });
  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>Error!</span>}
      {data && <Details registers={data.listRegister} />}
    </>
  );
};

export default withRouter(Register);
