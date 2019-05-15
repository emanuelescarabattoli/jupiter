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
    size: "10"
  },
  {
    value: "description",
    label: "Description",
    size: "30"
  },
  {
    value: "note",
    label: "Note",
    size: "40"
  },
  {
    value: "amount",
    label: "Amount",
    size: "10"
  },
  {
    actions: [
      {
        icon: "delete",
      },
      {
        icon: "copy"
      }
    ],
    label: "",
    size: "20"
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