import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";

import Page from "../../components/Page";
import { getErrorMessage } from "../../utils";
import RegisterDetail from "./components/RegisterDetail";
import ItemsList from "./components/ItemsList";
import ItemDetailModal from "./components/ItemDetailModal";
import {
  MUTATION_REGISTER,
  QUERY_REGISTER_DETAIL,
  QUERY_ITEM_DETAIL,
  MUTATION_ITEM
} from "../../queries/";


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: { id: "", description: "", note: "", itemSet: [] },
      item: { id: "", description: "", note: "", period: "", amount: "", date: "" },
      errorRegister: "",
      errorItem: "",
      modalVisible: false
    };
    this.onChangeRegister = this.onChangeRegister.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
    this.onSaveRegister = this.onSaveRegister.bind(this);
    this.onSaveItem = this.onSaveItem.bind(this);
    this.onClickAddItem = this.onClickAddItem.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  componentDidUpdate() {
    this.updateState();
  }

  updateState() {
    if (!this.state.register.id && this.props.register) {
      this.setState({ register: this.props.register });
    }
    if (!this.state.modalVisible && this.props.location.pathname.includes("item")) {
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
    this.saveRegister().then(registerId => registerId && this.props.history.push(`/register/${registerId}`));
  }

  onSaveItem() {
    this.saveItem().then(itemId => itemId && this.props.history.push(`/register/${this.state.register.id}`));
  }

  onClickAddItem() {
    this.saveRegister().then(registerId => registerId && this.props.history.push(`/register/${registerId}/item`));
  }

  saveRegister() {
    this.setState({ errorRegister: "" });
    return this.props.mutationRegister({ variables: { ...this.state.register } })
      .then(result => {
        if (result.data.mutationRegister.errors.length) {
          this.setState({ errorRegister: getErrorMessage(result.data.mutationRegister.errors) });
          return 0;
        }
        return result.data.mutationRegister.register.id;
      });
  }

  saveItem() {
    this.setState({ errorItem: "" });
    return this.props.mutationItem({ variables: { ...this.state.item, register: this.state.register.id } })
      .then(result => {
        if (result.data.mutationItem.errors.length) {
          this.setState({ errorItem: getErrorMessage(result.data.mutationItem.errors) });
          return 0;
        }
        return result.data.mutationItem.item.id;
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
      <Page title="Register" icon="toll">
        <RegisterDetail
          detail={register}
          error={errorRegister}
          onChange={this.onChangeRegister}
          onSave={this.onSaveRegister}
        />
        <ItemsList
          items={register.itemSet}
          onClickAdd={this.onClickAddItem}
          isVisibleAdd={register.id !== ""}
        />
        <ItemDetailModal
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
  location: PropTypes.object.isRequired,
  mutationRegister: PropTypes.func.isRequired,
  mutationItem: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  register: PropTypes.object
};

export default compose(
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
        notifyOnNetworkStatusChange: true,
        fetchPolicy: "network-only",
        variables: {
          id: props.match.params.registerId
        }
      })
    }
  ),
  graphql(
    MUTATION_REGISTER,
    {
      name: "mutationRegister"
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
  graphql(
    MUTATION_ITEM,
    {
      name: "mutationItem",
      options: props => ({
        refetchQueries: [
          {
            query: QUERY_REGISTER_DETAIL,
            variables: {
              id: props.match.params.registerId
            }
          }
        ]
      })
    }
  ),
)(Register);