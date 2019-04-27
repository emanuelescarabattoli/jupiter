import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import client from "../../store/client";
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