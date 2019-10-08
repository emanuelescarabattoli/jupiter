import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "../../client";
import PrivateRoute from "../../utils/PrivateRoute";
import Dashboard from "../Dashboard";
import Registers from "../Registers";
import Login from "../Login";
import Container from "./components/Container";

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Container>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/registers" component={Registers} />
      </Container>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
