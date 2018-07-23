import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
// Components
import UnitTemperature from './unit-temperature';

const ForecastColumnDayTemperature = (props) => {
  const { day, unit } = props;

  return (
    <Grid.Column>
      Min:
      {' '}
      {day.minimum}
      <UnitTemperature unit={unit} />
      <br />
      Max:
      {' '}
      {day.maximum}
      <UnitTemperature unit={unit} />
    </Grid.Column>
  );
};

ForecastColumnDayTemperature.propTypes = {
  day: PropTypes.shape({
    maximum: PropTypes.number.isRequired,
    minimum: PropTypes.number.isRequired,
  }).isRequired,
  unit: PropTypes.string.isRequired,
};

export default ForecastColumnDayTemperature;
