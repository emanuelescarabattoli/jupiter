import React from "react";
import PropTypes from "prop-types";

import { Grid, Col } from "../../../../components/Grid";
import { Modal, ModalHeader, ModalHeaderLeft, ModalHeaderRight, ModalBody } from "../../../../components/Modal";
import Button from "../../../../components/Button";
import FieldWrapper from "../../../../components/FieldWrapper";
import ButtonsWrapper from "../../../../components/ButtonsWrapper";
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
      <ModalHeaderLeft>
          aaa
      </ModalHeaderLeft>
      <ModalHeaderRight>
        <ButtonsWrapper>
          <Button icon="save" label="save" onClick={onSave} />
        </ButtonsWrapper>
      </ModalHeaderRight>
    </ModalHeader>
    <ModalBody>
      {displayErrorMessage(error)}
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
      <Grid>
        <Col size={4}>
          <FieldWrapper>
            <Input
              label="Date"
              name="date"
              type="date"
              value={detail.date}
              onChange={onChange}
            />
          </FieldWrapper>
        </Col>
        <Col size={4}>
          <FieldWrapper>
            <Input
              label="Period"
              name="period"
              value={detail.period}
              onChange={onChange}
            />
          </FieldWrapper>
        </Col>
        <Col size={4}>
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
  </Modal >
);

ItemDetailModal.propTypes = {
  detail: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default ItemDetailModal;