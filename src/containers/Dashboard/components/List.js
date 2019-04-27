import React from "react";

import Box from "../../../components/Box";
import { Grid, Col } from "../../../components/Grid";

import style from "./style.scss";


const List = ({ statistics }) => (
  <Grid>
    {
      statistics.map(record => (
        <Col size={4} key={record.id}>
          <Box
            description={record.description}
            value={record.result}
            note={record.note}
          />
        </Col>
      ))
    }
  </Grid>
);

export default List;