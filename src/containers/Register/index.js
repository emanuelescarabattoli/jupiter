import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";

import Page from "../../components/Page";
import { MUTATION_REGISTER_CREATE, QUERY_REGISTER_DETAIL } from "../../queries/";
import Detail from "./components/Detail";
import { getErrorMessage } from "../../utils";


class Register extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.state = {
      id: 0,
      registerDetail: { description: "", note: "" },
      errorRegisterDetail: ""
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      console.log(this.props);
      this.props.detailRegister({ variables: { id: this.props.match.params.id } })
        .then(result => console.log(result) || this.setState({ registerDetail: result}));
    }
  }

  onChange(event) {
    this.setState({
      registerDetail: { ...this.state.registerDetail, [event.target.name]: event.target.value }
    });
  }

  onSave() {
    this.setState({ errorRegisterDetail: "" });
    this.props.mutationRegister({ variables: { ...this.state.registerDetail } })
      .then(result => {
        if (result.data.mutationRegister.errors.length) {
          this.setState({ errorRegisterDetail: getErrorMessage(result.data.mutationRegister.errors) });
        } else {
          this.props.history.push(`/register/${result.data.mutationRegister.register.id}`);
        }
      });
  }

  render() {
    const {
      loadingCreateRegister
    } = this.props;
    const {
      registerDetail,
      errorRegisterDetail
    } = this.state;
    return (
      <Page title="Register">
        <Detail
          loading={loadingCreateRegister}
          onChange={this.onChange}
          onSave={this.onSave}
          detail={registerDetail}
          error={errorRegisterDetail}
        />
      </Page>
    );
  }
}

Register.propTypes = {
  match: PropTypes.object.isRequired,
  detailRegister: PropTypes.func.isRequired,
  mutationRegister: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  loadingCreateRegister: PropTypes.bool.isRequired
};

export default compose(
  graphql(
    MUTATION_REGISTER_CREATE,
    {
      name: "mutationRegister",
      props: ({ mutationRegister }) => ({
        mutationRegister,
        loadingCreateRegister: mutationRegister.loading
      })
    }
  ),
  graphql(
    QUERY_REGISTER_DETAIL,
    {
      name: "detailRegister",
      props: ({ detailRegister }) => ({
        detailRegister,
        loadingDetailRegister: detailRegister.loading
      })
    }
  ),
)(Register);