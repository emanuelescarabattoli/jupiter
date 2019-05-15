import React, { Component } from "react";
import PropTypes from "prop-types";

import { graphql, compose } from "react-apollo";

import Page from "../../components/Page";
import { QUERY_REGISTER_LIST } from "../../queries/";
import RegistersList from "./components/RegistersList";


const adaptRegisters = registers => registers && registers.map(record => ({ ...record })) || [];

class Registers extends Component {
  render() {
    const {
      loadingRegisters,
      registers
    } = this.props;
    return (
      <Page title="Registers" icon="toll">
        <RegistersList
          loading={loadingRegisters}
          registers={registers}
        />
      </Page>
    );
  }
}

Registers.propTypes = {
  loadingRegisters: PropTypes.bool.isRequired,
  registers: PropTypes.array.isRequired
};

export default compose(
  graphql(
    QUERY_REGISTER_LIST,
    {
      name: "listRegister",
      props: ({ listRegister }) => (
        {
          loadingRegisters: listRegister.loading,
          registers: adaptRegisters(listRegister.listRegister)
        }
      )
    }
  )
)(Registers);