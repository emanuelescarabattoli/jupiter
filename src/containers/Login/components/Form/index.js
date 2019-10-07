import React from "react";

const Login = ({ values, onChange, onSubmit }) => (
  <>
    <input type="text" name="username" value={values.username} onChange={onChange} />
    <input type="password" name="password" value={values.password} onChange={onChange} />
    <button onClick={onSubmit}>Submit</button>
  </>
);

export default Login;
