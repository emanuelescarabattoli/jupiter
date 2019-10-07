import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";

import { MUTATION_TOKEN_AUTH } from "../../queries";
import Form from "./components/Form";

const Login = ({ history }) => {
  const [input, setInput] = useState({ username: "", password: "" });
  const [doLogin, { loading, error }] = useMutation(MUTATION_TOKEN_AUTH);
  const onSubmit = () => console.log(input) || doLogin({ variables: { username: input.username, password: input.password } }).then(data => {
    localStorage.setItem("token", data.data.tokenAuth.token);
    history.push("/");
  });
  const onChange = event => setInput({ ...input, [event.target.name]: event.target.value });
  return (
    loading && <span>Loading...</span> ||
    error && <span>Error!</span> ||
    <Form values={input} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default withRouter(Login);
