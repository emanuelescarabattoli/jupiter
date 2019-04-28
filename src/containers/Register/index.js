import React, { Component } from "react";

import { graphql, compose } from "react-apollo";

import Page from "../../components/Page";
import ButtonFixed from "../../components/ButtonFixed";
import { MUTATION_CREATE_REGISTER } from "../../queries/";
import Detail from "./components/Detail";


class Register extends Component {
  render() {
    const {
      queryListRegister: {
        loading,
        listRegister
      }
    } = this.props;

    return (
      <Page title="Register">
        <Detail
          
        />
        <ButtonFixed><i className="fas fa-plus" /></ButtonFixed>
      </Page>
    );
  }
}

export default compose(graphql(QUERY_LIST_REGISTER, { name: "queryListRegister" }))(Registers);