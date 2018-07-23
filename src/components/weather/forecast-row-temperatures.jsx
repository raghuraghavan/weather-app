import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
// Components
import ForecastColumnDayTemperature from './forecast-column-day-temperature';

const ForecastRowTemperatures = (props) => {
  const { values } = props;

  return (
    <Grid.Row columns={5}>
      <ForecastColumnDayTemperature day={values.day1} unit={values.unit} />
      <ForecastColumnDayTemperature day={values.day2} unit={values.unit} />
      <ForecastColumnDayTemperature day={values.day3} unit={values.unit} />
      <ForecastColumnDayTemperature day={values.day4} unit={values.unit} />
      <ForecastColumnDayTemperature day={values.day5} unit={values.unit} />
    </Grid.Row>
  );
};

ForecastRowTemperatures.propTypes = {
  values: PropTypes.shape({
    day1: PropTypes.shape({
      minimum: PropTypes.number.isRequired,
      maximum: PropTypes.number.isRequired,
    }).isRequired,
    day2: PropTypes.shape({
      minimum: PropTypes.number.isRequired,
      maximum: PropTypes.number.isRequired,
    }).isRequired,
    day3: PropTypes.shape({
      minimum: PropTypes.number.isRequired,
      maximum: PropTypes.number.isRequired,
    }).isRequired,
    day4: PropTypes.shape({
      minimum: PropTypes.number.isRequired,
      maximum: PropTypes.number.isRequired,
    }).isRequired,
    day5: PropTypes.shape({
      minimum: PropTypes.number.isRequired,
      maximum: PropTypes.number.isRequired,
    }).isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired,
};

export default ForecastRowTemperatures;
