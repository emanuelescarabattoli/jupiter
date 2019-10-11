import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";

import List from "./components/List";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage";
import { QUERY_STATISTICS_LIST, MUTATION_STATISTICS_DELETE } from "../../queries";

const Statistics = ({ history }) => {
  const { loading, error, data } = useQuery(QUERY_STATISTICS_LIST);
  const [deleteStatistics, deleteStatisticsMutation] = useMutation(MUTATION_STATISTICS_DELETE);

  const onClickShow = id => history.push(`statistic/${id}`);

  const onClickNew = () => history.push("statistic");

  const onClickDelete = id => {
    if (confirm("Are you sure?")) {
      deleteStatistics({ variables: { pk: id }, refetchQueries: [{ query: QUERY_STATISTICS_LIST }] });
    }
  };

  return (
    <>
      {loading || deleteStatisticsMutation.loading && <LoadingMessage />}
      {error || deleteStatisticsMutation.error  && <ErrorMessage />}
      {data && <List statistics={data.listStatistics} onClickShow={onClickShow} onClickNew={onClickNew} onClickDelete={onClickDelete} />}
    </>
  );
};

export default withRouter(Statistics);
