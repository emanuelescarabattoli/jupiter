import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";

import Details from "./components/Details";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage";
import {
  QUERY_STATISTICS_DETAIL,
  MUTATION_STATISTICS,
  QUERY_STATISTICS_LIST,
  QUERY_STATISTICS_ROW_REGISTER_LIST,
  QUERY_STATISTICS_ROW_STATISTICS_LIST,
  QUERY_STATISTICS_ROW_REGISTER_DETAIL,
  QUERY_STATISTICS_ROW_STATISTICS_DETAIL,
  MUTATION_STATISTICS_ROW_REGISTER,
  MUTATION_STATISTICS_ROW_STATISTICS,
  QUERY_REGISTER_LIST
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

  const [loadStatisticsRowRegister, statisticsRowRegisterQuery] = useLazyQuery(QUERY_STATISTICS_ROW_REGISTER_DETAIL);
  const [saveStatisticsRowRegister, statisticsRowRegisterMutation] = useMutation(MUTATION_STATISTICS_ROW_REGISTER);
  const [inputStatisticsRowRegister, setInputStatisticsRowRegister] = useState({ id: undefined, register: { id: "" } });
  const [isOnEditStatisticsRowRegister, setIsOnEditStatisticsRowRegister] = useState(false);

  const [loadStatisticsRowStatistics, statisticsRowStatisticsQuery] = useLazyQuery(QUERY_STATISTICS_ROW_STATISTICS_DETAIL);
  const [saveStatisticsRowStatistics, statisticsRowStatisticsMutation] = useMutation(MUTATION_STATISTICS_ROW_STATISTICS);
  const [inputStatisticsRowStatistics, setInputStatisticsRowStatistics] = useState({ id: undefined, statistics: { id: "" } });
  const [isOnEditStatisticsRowStatistics, setIsOnEditStatisticsRowStatistics] = useState(false);

  const registersListQuery = useQuery(QUERY_REGISTER_LIST);
  const statisticsListQuery = useQuery(QUERY_STATISTICS_LIST);

  useEffect(() => statisticQuery.data && statisticQuery.data.detailStatistics && setInput(statisticQuery.data.detailStatistics), [statisticQuery]);

  useEffect(() => statisticsRowRegisterQuery.data && statisticsRowRegisterQuery.data.detailStatisticsRowRegister && setInputRow(statisticsRowRegisterQuery.data.detailStatisticsRowRegister), [statisticsRowRegisterQuery]);

  useEffect(() => statisticsRowStatisticsQuery.data && statisticsRowStatisticsQuery.data.detailStatisticsRowStatistics && setInputRow(statisticsRowStatisticsQuery.data.detailStatisticsRowStatistics), [statisticsRowStatisticsQuery]);

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
        setIsOnEdit(false);
      }
    });
  };

  const onSubmitStatisticsRowRegister = () => {
    saveStatisticsRowRegister(
      {
        variables: {
          parentStatistics: id,
          register: inputStatisticsRowRegister.register
        },
        refetchQueries: [
          {
            query: QUERY_STATISTICS_ROW_REGISTER_LIST,
            variables: { statistics: id }
          },
          {
            query: QUERY_STATISTICS_DETAIL,
            variables: {id }
          }
        ]
      }
    ).then(data => {
      if (!data.data.mutationStatisticsRowRegister.errors.length) {
        setIsOnEditStatisticsRowRegister(false);
      }
    });
  };

  const onSubmitStatisticsRowStatistics = () => {
    saveStatisticsRowStatistics(
      {
        variables: {
          parentStatistics: id,
          statistics: inputStatisticsRowStatistics.statistics
        },
        refetchQueries: [
          {
            query: QUERY_STATISTICS_ROW_STATISTICS_LIST,
            variables: { statistics: id }
          },
          {
            query: QUERY_STATISTICS_DETAIL,
            variables: {id }
          }
        ]
      }
    ).then(data => {
      if (!data.data.mutationStatisticsRowStatistics.errors.length) {
        setIsOnEditStatisticsRowStatistics(false);
      }
    });
  };

  const onClickEdit = () => {
    setIsOnEdit(true);
  };

  const onClickEditStatisticsRowRegister = rowId => {
    loadStatisticsRowRegister({ variables: { id: rowId } });
    setIsOnEditStatisticsRowRegister(true);
  };

  const onClickNewStatisticsRowRegister = () => {
    setInputStatisticsRowRegister({ id: undefined, register: { id: "" } });
    setIsOnEditStatisticsRowRegister(true);
  };

  const onClickEditStatisticsRowStatistics = rowId => {
    loadStatisticsRowStatistics({ variables: { id: rowId } });
    setIsOnEditStatisticsRowStatistics(true);
  };

  const onClickNewStatisticsRowStatistics = () => {
    setInputStatisticsRowStatistics({ id: undefined, statistics: { id: "" } });
    setIsOnEditStatisticsRowStatistics(true);
  };

  const onChange = event => setInput({ ...input, [event.target.name]: event.target.value });

  const onChangeStatisticsRowRegister = event => setInputStatisticsRowRegister({ ...inputStatisticsRowRegister, [event.target.name]: event.target.value });

  const onChangeStatisticsRowStatistics = event => setInputStatisticsRowStatistics({ ...inputStatisticsRowStatistics, [event.target.name]: event.target.value });

  return (
    <>
      {
        (
          statisticQuery.loading ||
          statisticMutation.loading ||
          registerRows.loading ||
          statisticsRows.loading ||
          statisticsRowRegisterQuery.loading ||
          statisticsRowRegisterMutation.loading ||
          statisticsRowStatisticsQuery.loading ||
          statisticsRowStatisticsMutation.loading ||
          registersListQuery.loading ||
          statisticsListQuery.loading
        ) &&
        <LoadingMessage />
      }
      {
        (
          statisticQuery.error ||
          statisticMutation.error ||
          registerRows.error ||
          statisticsRows.error ||
          statisticsRowRegisterQuery.error ||
          statisticsRowRegisterMutation.error ||
          statisticsRowStatisticsQuery.error ||
          statisticsRowStatisticsMutation.error ||
          registersListQuery.error ||
          statisticsListQuery.error ||
          (
            statisticMutation.data &&
            statisticMutation.data.mutationStatistics.errors &&
            statisticMutation.data.mutationStatistics.errors.length > 0
          ) || (
            statisticsRowRegisterMutation.data &&
            statisticsRowRegisterMutation.data.mutationStatisticsRowRegister.errors &&
            statisticsRowRegisterMutation.data.mutationStatisticsRowRegister.errors.length > 0
          ) || (
            statisticsRowStatisticsMutation.data &&
            statisticsRowStatisticsMutation.data.mutationStatisticsRowStatistics.errors &&
            statisticsRowStatisticsMutation.data.mutationStatisticsRowStatistics.errors.length > 0
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
        registerRows={registerRows.data && registerRows.data.listStatisticsRowRegister || []}
        statisticsRows={statisticsRows.data && statisticsRows.data.listStatisticsRowStatistics || []}
        registersList={registersListQuery.data && registersListQuery.data.listRegister || []}
        statisticsList={statisticsListQuery.data && statisticsListQuery.data.listStatistics || []}
        valuesStatisticsRowRegister={inputStatisticsRowRegister}
        onChangeStatisticsRowRegister={onChangeStatisticsRowRegister}
        onSubmitStatisticsRowRegister={onSubmitStatisticsRowRegister}
        isOnEditStatisticsRowRegister={isOnEditStatisticsRowRegister}
        onClickEditStatisticsRowRegister={onClickEditStatisticsRowRegister}
        onClickNewStatisticsRowRegister={onClickNewStatisticsRowRegister}
        valuesStatisticsRowStatistics={inputStatisticsRowStatistics}
        onChangeStatisticsRowStatistics={onChangeStatisticsRowStatistics}
        onSubmitStatisticsRowStatistics={onSubmitStatisticsRowStatistics}
        isOnEditStatisticsRowStatistics={isOnEditStatisticsRowStatistics}
        onClickEditStatisticsRowStatistics={onClickEditStatisticsRowStatistics}
        onClickNewStatisticsRowStatistics={onClickNewStatisticsRowStatistics}
        id={id}
      />
    </>
  );
};

export default withRouter(Statistic);
