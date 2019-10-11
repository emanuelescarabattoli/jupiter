import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "../../client";
import PrivateRoute from "../../utils/PrivateRoute";
import Dashboard from "../Dashboard";
import Registers from "../Registers";
import Register from "../Register";
import Statistics from "../Statistics";
import Statistic from "../Statistic";
import Login from "../Login";
import Container from "./components/Container";

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Container>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/registers" component={Registers} />
        <PrivateRoute exact path="/register/:registerId" component={Register} />
        <PrivateRoute exact path="/register" component={Register} />
        <PrivateRoute exact path="/statistics" component={Statistics} />
        <PrivateRoute exact path="/statistic" component={Statistic} />
      </Container>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
