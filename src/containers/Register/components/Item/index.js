import React from "react";
import PropTypes from "prop-types";

import { Modal, ModalHeader, ModalBody } from "../../../../components/Modal";
import { Grid, Col } from "../../../../components/Grid";
import Title from "../../../../components/Title";
import AlignRight from "../../../../components/AlignRight";
import Button from "../../../../components/Button";
import MessageError from "../../../../components/MessageError";
import FieldWrapper from "../../../../components/FieldWrapper";
import Input from "../../../../components/Input";


const Item = ({ onSave, error, detail, onChange }) => (
  <Modal>
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
      {error && <MessageError>{error}</MessageError>}
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
    </ModalBody>
  </Modal>
);

Item.propTypes = {
  items: PropTypes.array.isRequired
};

export default Item;