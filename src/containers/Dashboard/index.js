import React, { Component } from "react";

import { graphql, compose } from "react-apollo";

import Page from "../../components/Page";
import { QUERY_LIST_STATISTICS } from "../../queries/";
import List from "./components/List";

const adaptStatistics = statistics => statistics && statistics.map(record => ({
  ...record
})) || [];


class Dashboard extends Component {
  render() {
    const {
      queryListStatistics: {
        loading,
        listStatistics
      }
    } = this.props;

    return (
      <Page title="Dashboard">
        <List
          loading={loading}
          statistics={adaptStatistics(listStatistics)}
        />
      </Page>
    );
  }
}

export default compose(graphql(QUERY_LIST_STATISTICS, { name: "queryListStatistics" }))(Dashboard);