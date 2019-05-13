import React from "react";
import PropTypes from "prop-types";

import Table from "../../../../components/Table";
import Search from "../../../../components/Search";
import Button from "../../../../components/Button";
import ButtonsWrapper from "../../../../components/ButtonsWrapper";
import { Header, HeaderLeft, HeaderRight } from "../../../../components/Header";


const columns = [
  {
    value: "id",
    label: "Id",
    size: "5"
  },
  {
    value: "description",
    label: "Description",
    size: "40"
  },
  {
    value: "note",
    label: "Note",
    size: "50"
  },
  {
    value: "amount",
    label: "Amount",
    size: "5"
  }
];

const RegistersList = ({ registers }) => (
  <>
    <Header>
      <HeaderLeft>
        <Search />
      </HeaderLeft>
      <HeaderRight>
        <ButtonsWrapper>
          <Button icon="cloud_download" label="Export" />
          <Button icon="add" label="add" />
        </ButtonsWrapper>
      </HeaderRight>
    </Header>
    <Table
      columns={columns}
      data={registers}
    />
  </>
);

RegistersList.propTypes = {
  registers: PropTypes.array.isRequired
};

export default RegistersList;