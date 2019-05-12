import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";

import Page from "../../components/Page";
import { MUTATION_REGISTER, QUERY_REGISTER_DETAIL, QUERY_ITEM_DETAIL, MUTATION_ITEM } from "../../queries/";
import Detail from "./components/Detail/";
import { getErrorMessage } from "../../utils";
import List from "./components/List/";
import Item from "./components/Item/";


class Register extends Component {
  constructor(props) {
    super(props);
    this.onChangeRegister = this.onChangeRegister.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
    this.onSaveRegister = this.onSaveRegister.bind(this);
    this.onSaveItem = this.onSaveItem.bind(this);
    this.onClickNewItem = this.onClickNewItem.bind(this);
    this.state = {
      id: 0,
      register: { id: "", description: "", note: "", itemSet: [] },
      item: { id: "", description: "", note: "", period: "", amount: "" },
      errorRegister: "",
      modalVisible: false
    };
  }

  componentDidMount() {
    this.updateState();
  }

  componentDidUpdate() {
    this.updateState();
  }

  updateState() {
    if (this.props.register && !this.state.register.id) {
      this.setState({ register: this.props.register });
    }
    if (this.props.location.pathname.includes("item") && !this.state.modalVisible) {
      this.setState({ modalVisible: true });
    }
  }

  onChangeRegister(event) {
    this.setState({
      register: { ...this.state.register, [event.target.name]: event.target.value }
    });
  }

  onChangeItem(event) {
    this.setState({
      item: { ...this.state.item, [event.target.name]: event.target.value }
    });
  }

  onSaveRegister() {
    this.saveRegister().then(result => {
      if (result !== -1) {
        this.props.history.push(`/register/${result}`);
      }
    });
  }

  onSaveItem() {
    this.saveItem().then(result => {
      if (result !== -1) {
        this.props.history.push(`/register/${result}`);
      }
    });
  }

  onClickNewItem() {
    this.saveRegister().then(result => {
      if (result) {
        this.props.history.push(`/register/${result}/item`);
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

  saveItem() {
    this.setState({ errorItem: "" });
    return this.props.mutationItem({ variables: { ...this.state.item, register: this.state.register.id } })
      .then(result => {
        if (result.data.mutationItem.errors.length) {
          this.setState({ errorItem: getErrorMessage(result.data.mutationItem.errors) });
          return -1;
        } else {
          return result.data.mutationItem.item.id;
        }
      });
  }

  render() {
    const {
      register,
      errorRegister,
      item,
      errorItem,
      modalVisible
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
        <Item
          detail={item}
          error={errorItem}
          onChange={this.onChangeItem}
          onSave={this.onSaveItem}
          isVisible={modalVisible}
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
    MUTATION_REGISTER,
    {
      name: "mutationRegister"
    }
  ),
  graphql(
    QUERY_REGISTER_DETAIL,
    {
      name: "detailRegister",
      skip: props => !props.match.params.registerId,
      props: ({ detailRegister }) => ({
        register: detailRegister.detailRegister,
        loadingDetailRegister: detailRegister.loading
      }),
      options: props => ({
        variables: {
          id: props.match.params.registerId
        }
      })
    }
  ),
  graphql(
    MUTATION_ITEM,
    {
      name: "mutationItem"
    }
  ),
  graphql(
    QUERY_ITEM_DETAIL,
    {
      name: "detailItem",
      skip: props => !props.match.params.itemId,
      props: ({ detailItem }) => ({
        item: detailItem.detailItem,
        loadingDetailItem: detailItem.loading
      }),
      options: props => ({
        variables: {
          id: props.match.params.itemId
        }
      })
    }
  ),
)(Register);