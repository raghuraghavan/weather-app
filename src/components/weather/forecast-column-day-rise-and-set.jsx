import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ForecastColumnDayRiseAndSet = (props) => {
  const { day } = props;

  return (
    <Grid.Column>
      Sun
      <br />
      {day.sunrise}
      <br />
      {day.sunset}
      <br />
      <br />
      Moon
      <br />
      {day.moonrise}
      <br />
      {day.moonset}
    </Grid.Column>
  );
};

ForecastColumnDayRiseAndSet.propTypes = {
  day: PropTypes.shape({
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired,
    moonrise: PropTypes.string.isRequired,
    moonset: PropTypes.string.isRequired,
  }).isRequired,
};

export default ForecastColumnDayRiseAndSet;
