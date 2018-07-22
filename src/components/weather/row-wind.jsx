import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// Dependencies
import beaufort from 'beaufort-scale';

const RowWind = (props) => {
  const { wind, columns } = props;

  return (

    <Grid textAlign="center" celled className="compacted">
      <Grid.Row columns={2}>
        <Grid.Column columns={8}>
          Wind Direction
        </Grid.Column>
        <Grid.Column columns={8}>
          Wind Speed
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={columns}>
        <Grid.Column>
          <i className={`wi wi-wind towards-${wind.degrees}-deg text blue`} />
        </Grid.Column>
        <Grid.Column>
          {wind.direction}
        </Grid.Column>
        <Grid.Column>
          {<i className={`wi wi-wind-beaufort-${Math.floor(beaufort(wind.wind_kph).grade)} text blue`} />}
        </Grid.Column>
        <Grid.Column>
          {wind.speed}
          {' '}
          {wind.unit}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

RowWind.propTypes = {
  columns: PropTypes.number.isRequired,
  wind: PropTypes.shape({
    degrees: PropTypes.number.isRequired,
    direction: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    wind_kph: PropTypes.number.isRequired,
  }).isRequired,
};

export default RowWind;
