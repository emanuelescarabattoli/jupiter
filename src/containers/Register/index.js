import React, { Component } from "react";

import { graphql, compose } from "react-apollo";

import Page from "../../components/Page";
import { MUTATION_CREATE_REGISTER, QUERY_DETAIL_REGISTER } from "../../queries/";
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

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.detailRegister();
    }
  }

  onChangeRegisterDetail(event) {
    this.setState({
      registerDetail: { ...this.state.registerDetail, [event.target.name]: event.target.value }
    });
  }

  onClickSave() {
    this.setState({ errorRegisterDetail: "" });
    this.props.createRegister({ variables: { ...this.state.registerDetail } })
      .then(result => {
        if (result.data.mutationRegister.errors.length) {
          this.setState({ errorRegisterDetail: result.data.mutationRegister.errors.reduce((message, error) => message + error.field + error.messages[0], "") });
        } else {
          this.props.history.push(`/register/${result.data.mutationRegister.register.id}`);
        }
      });
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
  ),
  graphql(
    QUERY_DETAIL_REGISTER,
    {
      name: "detailRegister",
      props: ({ detailRegister }) => ({
        detailRegister: detailRegister,
        isLoadingDetailRegister: detailRegister.loading
      })
    }
  ),
)(Register);