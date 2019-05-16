import React from "react";
import PropTypes from "prop-types";

import Table from "../../../../components/Table";
import { Header, HeaderLeft, HeaderRight } from "../../../../components/Header";
import Search from "../../../../components/Search";
import Button from "../../../../components/Button";
import ButtonsWrapper from "../../../../components/ButtonsWrapper";
import ShowHideArea from "../../../../components/ShowHideArea";


const columns = [
  {
    value: "id",
    label: "Id",
    size: "10"
  },
  {
    value: "date",
    label: "Date",
    size: "20"
  },
  {
    value: "description",
    label: "Description",
    size: "40"
  },
  {
    value: "period",
    label: "Period",
    size: "10"
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

const ItemsList = ({ items, onClickAdd, isVisibleAdd }) => (
  <>
    <Header>
      <HeaderLeft>
        <Search />
      </HeaderLeft>
      <HeaderRight>
        <ButtonsWrapper>
          <ShowHideArea inLine isVisible={isVisibleAdd}>
            <Button label="Add" icon="add" onClick={onClickAdd} />
          </ShowHideArea>
        </ButtonsWrapper>
      </HeaderRight>
    </Header>
    <Table
      columns={columns}
      data={items}
    />
  </>
);

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemsList;