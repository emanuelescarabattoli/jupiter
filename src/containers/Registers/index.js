import React, { Component } from "react";
import PropTypes from "prop-types";

import { graphql, compose } from "react-apollo";

import Page from "../../components/Page";
import ButtonFixed from "../../components/ButtonFixed";
import { QUERY_REGISTER_LIST } from "../../queries/";
import List from "./components/List";


const adaptRegisters = registers => registers && registers.map(record => ({ ...record })) || [];

class Registers extends Component {
  render() {
    const {
      loading,
      registers
    } = this.props;
    return (
      <Page title="Registers">
        <List
          loading={loading}
          registers={registers}
        />
        <ButtonFixed><i className="fas fa-plus" /></ButtonFixed>
      </Page>
    );
  }
}


Registers.propTypes = {
  loading: PropTypes.bool.isRequired,
  registers: PropTypes.array.isRequired
};

export default compose(
  graphql(
    QUERY_REGISTER_LIST,
    {
      name: "listRegister",
      props: ({ listRegister }) => (
        {
          loading: listRegister.loading,
          registers: adaptRegisters(listRegister.listRegister)
        }
      )
    }
  )
)(Registers);