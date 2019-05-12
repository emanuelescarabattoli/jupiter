import React, { Component } from "react";
import PropTypes from "prop-types";

import { graphql, compose } from "react-apollo";

import Page from "../../components/Page";
import { QUERY_STATISTICS_LIST } from "../../queries";
import StatisticsList from "./components/StatisticsList";


const adaptStatistics = statistics => statistics && statistics.map(record => ({ ...record })) || [];

class Dashboard extends Component {
  render() {
    const {
      loadingStatistics,
      statistics
    } = this.props;
    return (
      <Page title="Dashboard">
        <StatisticsList
          loading={loadingStatistics}
          statistics={statistics}
        />
      </Page>
    );
  }
}

Dashboard.propTypes = {
  loadingStatistics: PropTypes.bool.isRequired,
  statistics: PropTypes.array.isRequired
};

export default compose(
  graphql(
    QUERY_STATISTICS_LIST,
    {
      name: "listStatistics",
      props: ({ listStatistics }) => (
        {
          loadingStatistics: listStatistics.loading,
          statistics: adaptStatistics(listStatistics.listStatistics)
        }
      )
    }
  )
)(Dashboard);