import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";

import Page from "../../components/Page";
import { MUTATION_REGISTER, QUERY_REGISTER_DETAIL } from "../../queries/";
import Detail from "./components/Detail/";
import { getErrorMessage } from "../../utils";
import List from "./components/List/";
import Item from "./components/Item/";


class Register extends Component {
  constructor(props) {
    super(props);
    this.onChangeRegister = this.onChangeRegister.bind(this);
    this.onSaveRegister = this.onSaveRegister.bind(this);
    this.onClickNewItem = this.onClickNewItem.bind(this);
    this.state = {
      id: 0,
      register: { id: "", description: "", note: "", itemSet: [] },
      errorRegister: "",
      modalVisible: false
    };
  }

  componentDidUpdate(props) {
    if (!props.register && this.props.register) {
      this.setState({ register: this.props.register });
    }
  }

  onChangeRegister(event) {
    this.setState({
      register: { ...this.state.register, [event.target.name]: event.target.value }
    });
  }

  onSaveRegister() {
    this.saveRegister().then(result => {
      if (result !== -1) {
        this.props.history.push(`/register/${result}`);
      }
    });
  }

  onClickNewItem() {
    this.saveRegister(result => {
      if (result) {
        this.setState({modalVisible: true});
      }
    });
  }

  saveRegister() {
    this.setState({ errorRegister: "" });
    return this.props.mutationRegister({ variables: { ...this.state.register } })
      .then(result => {
        if (result.data.mutationRegister.errors.length) {
          this.setState({ errorRegister: getErrorMessage(result.data.mutationRegister.errors) });
          return -1;
        } else {
          return result.data.mutationRegister.register.id;
        }
      });
  }

  render() {
    const {
      register,
      errorRegister
    } = this.state;
    return (
      <Page title="Register">
        <Detail
          onChange={this.onChangeRegister}
          onSave={this.onSaveRegister}
          onClickNewItem={this.onClickNewItem}
          detail={register}
          error={errorRegister}
          isVisibleNewItemButton={register.id !== ""}
        />
        <List
          items={register.itemSet}
        />
        <Item />
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
    MUTATION_REGISTER,
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
        register: detailRegister.detailRegister,
        loadingDetailRegister: detailRegister.loading
      }),
      options: props => ({
        variables: {
          id: props.match.params.id
        }
      })
    }
  ),
)(Register);