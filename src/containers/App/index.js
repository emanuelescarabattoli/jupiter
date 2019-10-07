import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "../../client";
import PrivateRoute from "../../utils/PrivateRoute";
import Dashboard from "../Dashboard";
import Login from "../Login";

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Dashboard} />
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
