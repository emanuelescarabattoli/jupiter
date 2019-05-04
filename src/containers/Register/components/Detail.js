import React from "react";

import { Card, CardHeader, CardBody } from "../../../components/Card";
import { Grid, Col } from "../../../components/Grid";
import FieldWrapper from "../../../components/FieldWrapper";
import Input from "../../../components/Input";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import AlignRight from "../../../components/AlignRight";


const Detail = ({ loading, onChange, detail, onClickSave, error }) => (
  <Card>
    <CardHeader>
      <Grid>
        <Col size={6}>
          <Title
            subtitle="A register contains a a list of items and a total"
          >
            Register detail
          </Title>
        </Col>
        <Col size={6}>
          <AlignRight>
            <Button light onClick={onClickSave}>Save</Button>
          </AlignRight>
        </Col>
      </Grid>
    </CardHeader>
    <CardBody>
      {error && error}
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

export default Detail;