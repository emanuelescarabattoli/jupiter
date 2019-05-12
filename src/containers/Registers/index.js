import React, { Component } from "react";
import PropTypes from "prop-types";

import { graphql, compose } from "react-apollo";

import Page from "../../components/Page";
import ButtonFixed from "../../components/ButtonFixed";
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
      <Page title="Registers">
        <RegistersList
          loading={loadingRegisters}
          registers={registers}
        />
        <ButtonFixed><i className="fas fa-plus" /></ButtonFixed>
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