import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
// Components
import ForecastColumnDayIcon from './forecast-column-day-icon';

const ForecastRowIcons = (props) => {
  const { values } = props;

  return (
    <Grid.Row columns={5}>
      <ForecastColumnDayIcon condition={values.day1} />
      <ForecastColumnDayIcon condition={values.day2} />
      <ForecastColumnDayIcon condition={values.day3} />
      <ForecastColumnDayIcon condition={values.day4} />
      <ForecastColumnDayIcon condition={values.day5} />
    </Grid.Row>
  );
};

ForecastRowIcons.propTypes = {
  values: PropTypes.shape({
    day1: PropTypes.number.isRequired,
    day2: PropTypes.number.isRequired,
    day3: PropTypes.number.isRequired,
    day4: PropTypes.number.isRequired,
    day5: PropTypes.number.isRequired,
  }).isRequired,
};

export default ForecastRowIcons;
