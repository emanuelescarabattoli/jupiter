import React, { Component } from "react";

import { graphql, compose } from "react-apollo";

import Page from "../../components/Page";
import ButtonFixed from "../../components/ButtonFixed";
import { QUERY_LIST_REGISTER } from "../../queries/";
import List from "./components/List";

const adaptRegisters = registers => registers && registers.map(record => (
  {
    ...record
  }
)) || [];


class Registers extends Component {
  render() {
    const {
      isLoadingListRegister,
      listRegister
    } = this.props;
    return (
      <Page title="Registers">
        <List
          loading={isLoadingListRegister}
          registers={adaptRegisters(listRegister)}
        />
        <ButtonFixed><i className="fas fa-plus" /></ButtonFixed>
      </Page>
    );
  }
}

export default compose(
  graphql(
    QUERY_LIST_REGISTER,
    {
      name: "listRegister",
      props: ({ listRegister }) => ({
        isLoadingListRegister: listRegister.loading,
        listRegister: listRegister.listRegister
      })
    }
  )
)(Registers);