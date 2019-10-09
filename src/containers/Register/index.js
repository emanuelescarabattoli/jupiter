import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Details from "./components/Details";
import { QUERY_REGISTER_DETAIL, MUTATION_REGISTER, QUERY_REGISTER_LIST } from "../../queries";

const Register = ({ match, history }) => {
  const registerQuery = useQuery(QUERY_REGISTER_DETAIL, { variables: { id: match.params.registerId } });
  const [input, setInput] = useState({ description: "", note: "" });
  useEffect(() => registerQuery.data && setInput(registerQuery.data.detailRegister), [registerQuery]);
  const [saveRegister, registerMutation] = useMutation(MUTATION_REGISTER);
  const onSubmit = () => saveRegister({ variables: { id: match.params.registerId, description: input.description, note: input.note }, refetchQueries: [{ query: QUERY_REGISTER_LIST }]}).then(() => {
    history.push("/registers");
  });
  const onChange = event => setInput({ ...input, [event.target.name]: event.target.value });
  return (
    <>
      {registerQuery.loading || registerMutation.data && <span>Loading...</span>}
      {registerQuery.error || registerMutation.error && <span>Error!</span>}
      {input && <Details values={input} onChange={onChange} onSubmit={onSubmit} />}
    </>
  );
};

export default withRouter(Register);
