import React, { Component } from "react";

import { graphql, compose } from "react-apollo";

import Page from "../../components/Page";
import { Grid, Col } from "../../components/Grid";
import ButtonFixed from "../../components/ButtonFixed";
import { QUERY_LIST_REGISTER } from "../../queries/";
import List from "./components/List";

const adaptRegisters = registers => registers && registers.map(record => ({
  ...record
})) || [];


class Registers extends Component {
  render() {
    const {
      queryListRegister: {
        loading,
        listRegister
      }
    } = this.props;

    return (
      <Page
        title="Registers"

      >
        <List
          loading={loading}
          registers={adaptRegisters(listRegister)}
        />
        <ButtonFixed><i className="fas fa-plus" /></ButtonFixed>
      </Page>
    );
  }
}

export default compose(graphql(QUERY_LIST_REGISTER, { name: "queryListRegister" }))(Registers);