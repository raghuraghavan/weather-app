import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const RowSunMoon = (props) => {
  const {
    sunrise,
    sunset,
    moonrise,
    moonset,
    columns,
  } = props;

  return (

    <Grid textAlign="center" celled className="compacted">
      <Grid.Row columns={columns}>
        <Grid.Column>
          Sunrise
          <br />
          {sunrise}
        </Grid.Column>
        <Grid.Column>
          Sunset
          <br />
          {sunset}
        </Grid.Column>
        <Grid.Column>
          Moonrise
          <br />
          {moonrise}
        </Grid.Column>
        <Grid.Column>
          Moonset
          <br />
          {moonset}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

RowSunMoon.propTypes = {
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
  moonrise: PropTypes.string.isRequired,
  moonset: PropTypes.string.isRequired,
  columns: PropTypes.number.isRequired,
};

export default RowSunMoon;
