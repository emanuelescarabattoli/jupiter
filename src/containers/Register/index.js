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
    this.onClickSave = this.onClickSave.bind(this);
    this.state = {
      id: 0,
      registerDetail: { description: "", note: "" },
      errorRegisterDetail: ""
    };
  }

  onChangeRegisterDetail(event) {
    this.setState({
      registerDetail: { ...this.state.registerDetail, [event.target.name]: event.target.value }
    });
  }

  onClickSave() {
    this.props.createRegister({ variables: { ...this.state.registerDetail } })
      .then(result => 
        result.data.mutationRegister.errors.length && this.setState({errorRegisterDetail: result.data.mutationRegister.errors.reduce((message, error) => message + error.field + error.messages[0], "")}));
  }

  render() {
    const {
      isLoadingCreateRegister
    } = this.props;
    const {
      registerDetail,
      errorRegisterDetail
    } = this.state;
    console.log(errorRegisterDetail);
    return (
      <Page title="Register">
        <Detail
          loading={isLoadingCreateRegister}
          onChange={this.onChangeRegisterDetail}
          onClickSave={this.onClickSave}
          detail={registerDetail}
          error={errorRegisterDetail}
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
        createRegister: createRegister,
        isLoadingCreateRegister: createRegister.loading
      })
    }
  )
)(Register);