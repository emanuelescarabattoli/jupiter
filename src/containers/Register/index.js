import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import Details from "./components/Details";
import { QUERY_REGISTER_DETAIL } from "../../queries";

const Register = ({ match }) => {
  const { loading, error, data } = useQuery(QUERY_REGISTER_DETAIL, { variables: { id: match.params.registerId } });
  const [input, setInput] = useState({ description: "", note: "" });
  useEffect(() => data && setInput(data.detailRegister), [data]);
  const onChange = event => setInput({ ...input, [event.target.name]: event.target.value });
  return (
    <>
      {loading && <span>Loading...</span>}
      {error && <span>Error!</span>}
      {data && <Details values={input} onChange={onChange} />}
    </>
  );
};

export default withRouter(Register);
