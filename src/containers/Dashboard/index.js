import React, { Component } from "react";
import PropTypes from "prop-types";

import { graphql, compose } from "react-apollo";

import Page from "../../components/Page";
import { QUERY_STATISTICS_LIST } from "../../queries";
import List from "./components/List";


const adaptStatistics = statistics => statistics && statistics.map(record => ({ ...record })) || [];

class Dashboard extends Component {
  render() {
    const {
      loading,
      statistics
    } = this.props;
    return (
      <Page title="Dashboard">
        <List
          loading={loading}
          statistics={statistics}
        />
      </Page>
    );
  }
}

Dashboard.propTypes = {
  loading: PropTypes.bool.isRequired,
  statistics: PropTypes.array.isRequired
};

export default compose(
  graphql(
    QUERY_STATISTICS_LIST,
    {
      name: "listStatistics",
      props: ({ listStatistics }) => (
        {
          loading: listStatistics.loading,
          statistics: adaptStatistics(listStatistics.statistics)
        }
      )
    }
  )
)(Dashboard);