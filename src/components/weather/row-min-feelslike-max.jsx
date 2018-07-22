import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// Components
import UnitTemperature from './unit-temperature';

const RowTemperatureMinToMax = (props) => {
  const {
    columns,
    feelsLike,
    minimum,
    maximum,
    unit,
  } = props;

  return (
    <Grid.Row columns={columns}>
      <Grid.Column>
        Minimum:
        {' '}
        {minimum}
        <UnitTemperature unit={unit} />
      </Grid.Column>
      <Grid.Column>
        Feels Like:
        {' '}
        {feelsLike}
        <UnitTemperature unit={unit} />
      </Grid.Column>
      <Grid.Column>
        Maximum:
        {' '}
        {maximum}
        <UnitTemperature unit={unit} />
      </Grid.Column>
    </Grid.Row>
  );
};

RowTemperatureMinToMax.propTypes = {
  columns: PropTypes.number.isRequired,
  feelsLike: PropTypes.number.isRequired,
  minimum: PropTypes.number.isRequired,
  maximum: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default RowTemperatureMinToMax;
