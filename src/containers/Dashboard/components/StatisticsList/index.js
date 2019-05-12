import React from "react";
import PropTypes from "prop-types";

import Box from "../../../../components/Box";
import { Grid, Col } from "../../../../components/Grid";


const StatisticsList = ({ statistics }) => (
  <Grid>
    {
      statistics.map(({ id, description, result, note }) => (
        <Col size={4} key={id}>
          <Box
            description={description}
            value={result}
            note={note}
          />
        </Col>
      ))
    }
  </Grid>
);

StatisticsList.propTypes = {
  statistics: PropTypes.array.isRequired
};

export default StatisticsList;