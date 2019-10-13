import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";

import Details from "./components/Details";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage";
import {
  QUERY_REGISTER_DETAIL,
  MUTATION_REGISTER,
  QUERY_REGISTER_LIST,
  QUERY_REGISTER_ROW_DETAIL,
  MUTATION_REGISTER_ROW,
  MUTATION_REGISTER_ROW_DELETE
} from "../../queries";

const getIdByParams = match => match && match.params && match.params.registerId || undefined;

const Register = ({ match, history }) => {
  const id = getIdByParams(match);

  const registerQuery = useQuery(QUERY_REGISTER_DETAIL, { variables: { id }, skip: !id });
  const [saveRegister, registerMutation] = useMutation(MUTATION_REGISTER);
  const [input, setInput] = useState({ description: "", note: "", registerrowSet: [] });
  const [isOnEdit, setIsOnEdit] = useState(!id || false);

  const [loadRegisterRow, registerRowQuery] = useLazyQuery(QUERY_REGISTER_ROW_DETAIL);
  const [saveRegisterRow, registerRowMutation] = useMutation(MUTATION_REGISTER_ROW);
  const [inputRow, setInputRow] = useState({ id: undefined, date: "", description: "", period: "", amount: "", note: "" });
  const [isOnEditRegisterRow, setIsOnEditRegisterRow] = useState(false);

  const [deleteRegisterRow, deleteRegisterRowMutation] = useMutation(MUTATION_REGISTER_ROW_DELETE);

  useEffect(() => registerQuery.data && registerQuery.data.detailRegister && setInput(registerQuery.data.detailRegister), [registerQuery]);

  useEffect(() => registerRowQuery.data && registerRowQuery.data.detailRegisterRow && setInputRow(registerRowQuery.data.detailRegisterRow), [registerRowQuery]);

  const onSubmit = () => {
    saveRegister(
      {
        variables: {
          id,
          description: input.description,
          note: input.note
        },
        refetchQueries: [
          {
            query: QUERY_REGISTER_LIST
          }
        ]
      }
    ).then(data => {
      if (!data.data.mutationRegister.errors.length) {
        history.push(`/register/${data.data.mutationRegister.register.id}`);
        setIsOnEdit(false);
      }
    });
  };

  const onSubmitRow = () => {
    saveRegisterRow(
      {
        variables: {
          register: id,
          id: inputRow.id,
          date: inputRow.date,
          description: inputRow.description,
          period: inputRow.period,
          amount: inputRow.amount,
          note: inputRow.not
        },
        refetchQueries: [
          {
            query: QUERY_REGISTER_DETAIL,
            variables: { id }
          }
        ]
      }
    ).then(data => {
      if (!data.data.mutationRegisterRow.errors.length) {
        setIsOnEditRegisterRow(false);
      }
    });
  };

  const onClickEdit = () => {
    setIsOnEdit(true);
  };

  const onClickEditRow = rowId => {
    loadRegisterRow({ variables: { id: rowId } });
    setIsOnEditRegisterRow(true);
  };

  const onClickNewRow = () => {
    setInputRow({ id: undefined, date: "", description: "", period: "", amount: "", note: "" });
    setIsOnEditRegisterRow(true);
  };

  const onClickDeleteRow = rowId => {
    if(confirm("Are you sure?")){
      deleteRegisterRow({ variables: { pk: rowId }, refetchQueries: [{ query: QUERY_REGISTER_DETAIL, variables: { id } }] });
    }
  };

  const onChange = event => setInput({ ...input, [event.target.name]: event.target.value });

  const onChangeRow = event => setInputRow({ ...inputRow, [event.target.name]: event.target.value });

  return (
    <>
      {
        (
          registerQuery.loading ||
          registerMutation.loading ||
          registerRowQuery.loading ||
          registerRowMutation.loading
        ) &&
        <LoadingMessage />
      }
      {
        (
          registerQuery.error ||
          registerMutation.error ||
          registerRowQuery.error ||
          registerRowMutation.error ||
          deleteRegisterRowMutation.error ||
          (
            registerMutation.data &&
            registerMutation.data.mutationRegister.errors &&
            registerMutation.data.mutationRegister.errors.length > 0
          ) ||
          (
            registerRowMutation.data &&
            registerRowMutation.data.mutationRegisterRow.errors &&
            registerRowMutation.data.mutationRegisterRow.errors.length > 0
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
        valuesRow={inputRow}
        onChangeRow={onChangeRow}
        onSubmitRow={onSubmitRow}
        isOnEditRow={isOnEditRegisterRow}
        onClickEditRow={onClickEditRow}
        onClickNewRow={onClickNewRow}
        onClickDeleteRow={onClickDeleteRow}
        id={id}
      />
    </>
  );
};

export default withRouter(Register);
