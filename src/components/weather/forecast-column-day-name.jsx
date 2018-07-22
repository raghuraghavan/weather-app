import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
// Custom Code
import { getDayStringFromEpoch } from '../../engine/tools';

const ForecastColumnDayName = (props) => {
  const { day } = props;

  return (
    <Grid.Column>
      {getDayStringFromEpoch(day, 'medium').toUpperCase()}
    </Grid.Column>
  );
};

ForecastColumnDayName.propTypes = {
  day: PropTypes.number.isRequired,
};

export default ForecastColumnDayName;
