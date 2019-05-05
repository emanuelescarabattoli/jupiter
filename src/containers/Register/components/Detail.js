import React from "react";
import PropTypes from "prop-types";

import { Card, CardHeader, CardBody } from "../../../components/Card";
import { Grid, Col } from "../../../components/Grid";
import FieldWrapper from "../../../components/FieldWrapper";
import Input from "../../../components/Input";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import AlignRight from "../../../components/AlignRight";
import MessageError from "../../../components/MessageError";


const Detail = ({ onChange, detail, onSave, error }) => (
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
            <Button light onClick={onSave}>Save</Button>
          </AlignRight>
        </Col>
      </Grid>
    </CardHeader>
    <CardBody>
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
    </CardBody>
  </Card>
);

Detail.propTypes = {
  onChange: PropTypes.func.isRequired,
  detail: PropTypes.any.isRequired,
  onSave: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default Detail;