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
      register: { id: "", description: "", note: "" },
      errorRegisterDetail: ""
    };
  }

  componentDidMount() {
    console.log(this.props);
    if (this.props.register) {
      this.setState({ register: this.props.register });
    }
  }

  onChange(event) {
    this.setState({
      register: { ...this.state.register, [event.target.name]: event.target.value }
    });
  }

  onSave() {
    this.setState({ errorRegisterDetail: "" });
    this.props.mutationRegister({ variables: { ...this.state.register } })
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
      register,
      errorRegisterDetail
    } = this.state;
    return (
      <Page title="Register">
        <Detail
          onChange={this.onChange}
          onSave={this.onSave}
          detail={register}
          error={errorRegisterDetail}
        />
      </Page>
    );
  }
}

Register.propTypes = {
  match: PropTypes.object.isRequired,
  mutationRegister: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  register: PropTypes.object
};

Register.defaultProps = {
  register: undefined
};

export default compose(
  graphql(
    MUTATION_REGISTER_CREATE,
    {
      name: "mutationRegister"
    }
  ),
  graphql(
    QUERY_REGISTER_DETAIL,
    {
      name: "detailRegister",
      skip: props => !props.match.params.id,
      props: ({ detailRegister }) => ({
        detailRegister,
        loadingDetailRegister: detailRegister.loading,
        register: detailRegister.data
      }),
      options: props => ({
        variables: {
          id: props.match.params.id
        }
      })
    }
  ),
)(Register);