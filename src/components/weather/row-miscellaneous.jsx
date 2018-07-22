import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const RowMiscellaneous = (props) => {
  const { misc, columns } = props;

  return (

    <Grid textAlign="center" celled className="compacted">
      <Grid.Row columns={columns}>
        <Grid.Column>
          Humidity
          <br />
          {misc.humidity}
          {' '}
          {misc.units.humidity}
        </Grid.Column>
        <Grid.Column>
          Precipitation
          <br />
          {misc.precipitation}
          {' '}
          {misc.units.precipitation}
        </Grid.Column>
        <Grid.Column>
          UV Index
          <br />
          {misc.uv}
        </Grid.Column>
        <Grid.Column>
          Pressure
          <br />
          {misc.pressure}
          {' '}
          {misc.units.pressure}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

RowMiscellaneous.propTypes = {
  columns: PropTypes.number.isRequired,
  misc: PropTypes.shape({
    humidity: PropTypes.number.isRequired,
    precipitation: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    uv: PropTypes.number.isRequired,
    units: PropTypes.shape({
      humidity: PropTypes.string.isRequired,
      precipitation: PropTypes.string.isRequired,
      pressure: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RowMiscellaneous;
