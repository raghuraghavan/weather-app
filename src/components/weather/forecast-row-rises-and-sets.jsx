import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
// Components
import ForecastColumnDayRiseAndSet from './forecast-column-day-rise-and-set';

const ForecastRowRisesAndSets = (props) => {
  const { values } = props;

  return (
    <Grid.Row columns={5}>
      <ForecastColumnDayRiseAndSet day={values.day1} />
      <ForecastColumnDayRiseAndSet day={values.day2} />
      <ForecastColumnDayRiseAndSet day={values.day3} />
      <ForecastColumnDayRiseAndSet day={values.day4} />
      <ForecastColumnDayRiseAndSet day={values.day5} />
    </Grid.Row>
  );
};

ForecastRowRisesAndSets.propTypes = {
  values: PropTypes.shape({
    day1: PropTypes.shape({
      sunrise: PropTypes.string.isRequired,
      sunset: PropTypes.string.isRequired,
      moonrise: PropTypes.string.isRequired,
      moonset: PropTypes.string.isRequired,
    }).isRequired,
    day2: PropTypes.shape({
      sunrise: PropTypes.string.isRequired,
      sunset: PropTypes.string.isRequired,
      moonrise: PropTypes.string.isRequired,
      moonset: PropTypes.string.isRequired,
    }).isRequired,
    day3: PropTypes.shape({
      sunrise: PropTypes.string.isRequired,
      sunset: PropTypes.string.isRequired,
      moonrise: PropTypes.string.isRequired,
      moonset: PropTypes.string.isRequired,
    }).isRequired,
    day4: PropTypes.shape({
      sunrise: PropTypes.string.isRequired,
      sunset: PropTypes.string.isRequired,
      moonrise: PropTypes.string.isRequired,
      moonset: PropTypes.string.isRequired,
    }).isRequired,
    day5: PropTypes.shape({
      sunrise: PropTypes.string.isRequired,
      sunset: PropTypes.string.isRequired,
      moonrise: PropTypes.string.isRequired,
      moonset: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ForecastRowRisesAndSets;
