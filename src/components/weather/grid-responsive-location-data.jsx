import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
// Sibling Components
import RowLocation from './row-location';
import RowTemperatureMinToMax from './row-min-feelslike-max';

const GridResponsiveLocationData = (props) => {
  const {
    columns,
    country,
    feelsLike,
    minimum,
    maximum,
    name,
    region,
    unit,
  } = props;

  return (
    <Grid textAlign="center" className="compacted">
      <RowTemperatureMinToMax
        columns={columns}
        minimum={minimum}
        feelsLike={feelsLike}
        maximum={maximum}
        unit={unit}
      />
      <RowLocation
        name={name}
        region={region}
        country={country}
      />
    </Grid>
  );
};

GridResponsiveLocationData.propTypes = {
  columns: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  feelsLike: PropTypes.number.isRequired,
  minimum: PropTypes.number.isRequired,
  maximum: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default GridResponsiveLocationData;
