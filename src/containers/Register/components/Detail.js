import React from "react";

import { Card, CardBody } from "../../../components/Card";
import { Grid, Col } from "../../../components/Grid";
import FieldWrapper from "../../../components/FieldWrapper";
import Input from "../../../components/Input";


const Detail = ({ loading, onChange, detail }) => (
  <Card>
    <CardBody>
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