import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import List from "./components/List";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage";
import { QUERY_STATISTICS_LIST } from "../../queries";

const Statistics = ({ history }) => {
  const { loading, error, data } = useQuery(QUERY_STATISTICS_LIST);

  const onClickShow = id => history.push(`statistic/${id}`);

  const onClickNew = () => history.push("statistic");

  return (
    <>
      {loading && <LoadingMessage />}
      {error && <ErrorMessage />}
      {data && <List statistics={data.listStatistics} onClickShow={onClickShow} onClickNew={onClickNew} />}
    </>
  );
};

export default withRouter(Statistics);
