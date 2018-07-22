import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
// Components
import ForecastColumnDayName from './forecast-column-day-name';

const ForecastRowDayNames = (props) => {
  const { values } = props;

  return (
    <Grid.Row columns={5}>
      <ForecastColumnDayName day={values.day1} />
      <ForecastColumnDayName day={values.day2} />
      <ForecastColumnDayName day={values.day3} />
      <ForecastColumnDayName day={values.day4} />
      <ForecastColumnDayName day={values.day5} />
    </Grid.Row>
  );
};

ForecastRowDayNames.propTypes = {
  values: PropTypes.shape({
    day1: PropTypes.number.isRequired,
    day2: PropTypes.number.isRequired,
    day3: PropTypes.number.isRequired,
    day4: PropTypes.number.isRequired,
    day5: PropTypes.number.isRequired,
  }).isRequired,
};

export default ForecastRowDayNames;
