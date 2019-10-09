import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Details from "./components/Details";
import { QUERY_REGISTER_DETAIL, MUTATION_REGISTER, QUERY_REGISTER_LIST } from "../../queries";

const getIdByParams = match => match && match.params && match.params.registerId || undefined;

const Register = ({ match, history }) => {
  const id = getIdByParams(match);

  const registerQuery = useQuery(QUERY_REGISTER_DETAIL, { variables: { id }, skip: !id });
  const [saveRegister, registerMutation] = useMutation(MUTATION_REGISTER);
  const [input, setInput] = useState({ description: "", note: "" });

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
    ).then(() => {
      history.push("/registers");
    });
  };

  const onChange = event => setInput({ ...input, [event.target.name]: event.target.value });

  return (
    <>
      {registerQuery.loading || registerMutation.data && <span>Loading...</span>}
      {registerQuery.error || registerMutation.error && <span>Error!</span>}
      <Details values={input} onChange={onChange} onSubmit={onSubmit} />
    </>
  );
};

export default withRouter(Register);
