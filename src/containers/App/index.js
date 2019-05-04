import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import client from "../../store/client";
import PrivateRoute from "../../utils/PrivateRoute";
import Dashboard from "../Dashboard";
import Registers from "../Registers";
import Register from "../Register";
import Login from "../Login";


const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute exact path="/registers" component={Registers} />
      <PrivateRoute exact path="/register" component={Register} />
      <PrivateRoute exact path="/register/:id" component={Register} />
    </BrowserRouter>
  </ApolloProvider>
);

export default App; 