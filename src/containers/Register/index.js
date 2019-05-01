import React, { Component } from "react";

import { graphql, compose } from "react-apollo";

import Page from "../../components/Page";
import ButtonFixed from "../../components/ButtonFixed";
import { MUTATION_CREATE_REGISTER } from "../../queries/";
import Detail from "./components/Detail";


class Register extends Component {

  constructor(props) {
    super(props);
    this.onChangeRegisterDetail = this.onChangeRegisterDetail.bind(this);
    this.state = {
      id: 0,
      registerDetail: { description: "", note: "" }
    };
  }

  onChangeRegisterDetail(event) {
    this.setState({
      registerDetail: { ...this.state.registerDetail, [event.target.name]: event.target.value }
    });
  }

  render() {
    const {
      isLoadingCreateRegister
    } = this.props;
    const {
      registerDetail
    } = this.state;
    return (
      <Page title="Register">
        <Detail
          loading={isLoadingCreateRegister}
          onChangeRegisterDetail={this.onChangeRegisterDetail}
          registerDetail={registerDetail}
        />
      </Page>
    );
  }
}

export default compose(
  graphql(
    MUTATION_CREATE_REGISTER,
    {
      name: "createRegister",
      props: ({ createRegister }) => ({
        isLoadingCreateRegister: createRegister.loading
      })
    }
  )
)(Register);