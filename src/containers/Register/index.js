import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Details from "./components/Details";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage";
import { QUERY_REGISTER_DETAIL, MUTATION_REGISTER, QUERY_REGISTER_LIST } from "../../queries";

const getIdByParams = match => match && match.params && match.params.registerId || undefined;

const Register = ({ match, history }) => {
  const id = getIdByParams(match);

  const registerQuery = useQuery(QUERY_REGISTER_DETAIL, { variables: { id }, skip: !id });
  const [saveRegister, registerMutation] = useMutation(MUTATION_REGISTER);
  const [input, setInput] = useState({ description: "", note: "", registerrowSet: [] });

  useEffect(() => registerQuery.data && registerQuery.data.detailRegister && setInput(registerQuery.data.detailRegister), [registerQuery]);

  const onSubmit = () => {
    saveRegister(
      {
        variables: {
          id,
          description: input.description,
          note: input.note
        },
        refetchQueries: [
          {
            query: QUERY_REGISTER_LIST
          }
        ]
      }
    ).then(data => {
      if (!data.data.mutationRegister.errors.length) {
        history.push("/registers");
      }
    });
  };

  const onChange = event => setInput({ ...input, [event.target.name]: event.target.value });

  return (
    <>
      {registerQuery.loading || registerMutation.loading && <LoadingMessage />}
      {registerQuery.error || registerMutation.error || registerMutation.data && registerMutation.data.mutationRegister.errors && registerMutation.data.mutationRegister.errors.length && <ErrorMessage />}
      <Details values={input} onChange={onChange} onSubmit={onSubmit} />
    </>
  );
};

export default withRouter(Register);
