import React from "react";
import PropTypes from "prop-types";

import { Modal, ModalHeader, ModalBody } from "../../../../components/Modal";
import { Grid, Col } from "../../../../components/Grid";
import Title from "../../../../components/Title";
import AlignRight from "../../../../components/AlignRight";
import Button from "../../../../components/Button";
import FieldWrapper from "../../../../components/FieldWrapper";
import Input from "../../../../components/Input";
import { displayErrorMessage } from "../../../../utils/";


const ItemDetailModal = (
  {
    detail,
    error,
    onChange,
    onSave,
    isVisible
  }
) => (
  <Modal isVisible={isVisible}>
    <ModalHeader>
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
            <Button light onClick={onSave}>Save</Button>
          </AlignRight>
        </Col>
      </Grid>
    </ModalHeader>
    <ModalBody>
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
          <FieldWrapper>
            <Input
              label="Date"
              name="date"
              type="date"
              value={detail.date}
              onChange={onChange}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Input
              label="Period"
              name="period"
              value={detail.period}
              onChange={onChange}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Input
              label="amount"
              name="amount"
              value={detail.amount}
              onChange={onChange}
            />
          </FieldWrapper>
        </Col>
      </Grid>
    </ModalBody>
  </Modal>
);

ItemDetailModal.propTypes = {
  detail: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default ItemDetailModal;