import React from "react";
import PropTypes from "prop-types";

import { Header, HeaderLeft, HeaderRight } from "../../../../components/Header";
import Form from "../../../../components/Form";
import FieldWrapper from "../../../../components/FieldWrapper";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import ButtonsWrapper from "../../../../components/ButtonsWrapper";
import { displayErrorMessage } from "../../../../utils/";


const RegisterDetail = ({ onChange, detail, onSave, error }) => (
  <>
    <Header>
      <HeaderLeft />
      <HeaderRight>
        <ButtonsWrapper>
          <Button label="Save" icon="save" onClick={onSave} />
        </ButtonsWrapper>
      </HeaderRight>
    </Header>
    <Form>
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
    </Form>
  </>
);

RegisterDetail.propTypes = {
  onChange: PropTypes.func.isRequired,
  detail: PropTypes.any.isRequired,
  onSave: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default RegisterDetail;