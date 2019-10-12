import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Details from "./components/Details";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage";
import {
  QUERY_STATISTICS_DETAIL,
  MUTATION_STATISTICS,
  QUERY_STATISTICS_LIST,
  QUERY_STATISTICS_ROW_REGISTER_LIST,
  QUERY_STATISTICS_ROW_STATISTICS_LIST
} from "../../queries";

const getIdByParams = match => match && match.params && match.params.statisticId || undefined;

const Statistic = ({ match, history }) => {
  const id = getIdByParams(match);

  const statisticQuery = useQuery(QUERY_STATISTICS_DETAIL, { variables: { id }, skip: !id });
  const [saveStatistic, statisticMutation] = useMutation(MUTATION_STATISTICS);
  const [input, setInput] = useState({ description: "", note: "" });
  const [isOnEdit, setIsOnEdit] = useState(!id || false);

  const registerRows = useQuery(QUERY_STATISTICS_ROW_REGISTER_LIST, { variables: { statistics: id }, skip: !id });
  const statisticsRows = useQuery(QUERY_STATISTICS_ROW_STATISTICS_LIST, { variables: { statistics: id }, skip: !id });

  useEffect(() => statisticQuery.data && statisticQuery.data.detailStatistics && setInput(statisticQuery.data.detailStatistics), [statisticQuery]);

  const onSubmit = () => {
    saveStatistic(
      {
        variables: {
          id,
          description: input.description,
          note: input.note
        },
        refetchQueries: [
          {
            query: QUERY_STATISTICS_LIST
          }
        ]
      }
    ).then(data => {
      if (!data.data.mutationStatistics.errors.length) {
        history.push(`/statistic/${data.data.mutationStatistics.statistics.id}`);
      }
    });
  };

  const onClickEdit = () => {
    setIsOnEdit(true);
  };

  const onChange = event => setInput({ ...input, [event.target.name]: event.target.value });

  return (
    <>
      {
        (
          statisticQuery.loading ||
          statisticMutation.loading ||
          registerRows.loading ||
          statisticsRows.loading
        ) &&
        <LoadingMessage />
      }
      {
        (
          statisticQuery.error ||
          statisticMutation.error ||
          registerRows.error ||
          statisticsRows.error ||
          (
            statisticMutation.data &&
            statisticMutation.data.mutationStatistics.errors &&
            statisticMutation.data.mutationStatistics.errors.length > 0
          )
        ) &&
        <ErrorMessage />
      }
      <Details
        values={input}
        onChange={onChange}
        onSubmit={onSubmit}
        isOnEdit={isOnEdit}
        onClickEdit={onClickEdit}
        registerRows={registerRows}
        statisticsRows={statisticsRows}
        id={id}
      />
    </>
  );
};

export default withRouter(Statistic);
