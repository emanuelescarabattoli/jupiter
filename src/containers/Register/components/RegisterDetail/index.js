import React from "react";
import PropTypes from "prop-types";

import { Card, CardHeader, CardBody } from "../../../../components/Card";
import { Grid, Col } from "../../../../components/Grid";
import FieldWrapper from "../../../../components/FieldWrapper";
import Input from "../../../../components/Input";
import Title from "../../../../components/Title";
import Button from "../../../../components/Button";
import AlignRight from "../../../../components/AlignRight";
import ButtonsWrapper from "../../../../components/ButtonsWrapper";
import ShowHideArea from "../../../../components/ShowHideArea";
import { displayErrorMessage } from "../../../../utils/";


const RegisterDetail = ({ onChange, detail, onSave, error, onClickNewItem, isVisibleNewItemButton }) => (
  <Card>
    <CardHeader>
      <Grid>
        <Col size={6}>
          <Title
            subtitle="A register contains a list of items and a total"
          >
            Register detail
          </Title>
        </Col>
        <Col size={6}>
          <AlignRight>
            <ButtonsWrapper>
              <ShowHideArea inLine isVisible={isVisibleNewItemButton}>
                <Button light onClick={onClickNewItem}>New item</Button>
              </ShowHideArea>
              <Button light onClick={onSave}>Save</Button>
            </ButtonsWrapper>
          </AlignRight>
        </Col>
      </Grid>
    </CardHeader>
    <CardBody>
      {displayErrorMessage(error)}
      <Grid>
        <Col size={12}>
          <FieldWrapper>
            <Input
              label="Description"
              name="description"
              value={detail.description}
              onChange={onChange}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Input
              label="Note"
              name="note"
              value={detail.note}
              onChange={onChange}
            />
          </FieldWrapper>
        </Col>
      </Grid>
    </CardBody>
  </Card>
);

RegisterDetail.propTypes = {
  onChange: PropTypes.func.isRequired,
  detail: PropTypes.any.isRequired,
  onSave: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default RegisterDetail;