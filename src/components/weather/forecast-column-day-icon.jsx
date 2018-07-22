import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
// Custom Code
import { getkApixuColor, getApixuIconName } from './icon-map';

const ForecastColumnDayIcon = (props) => {
  const { condition } = props;

  return (
    <Grid.Column>
      <i
        className={`wi wi-${getApixuIconName(true, condition)}
                    ${getkApixuColor(true, condition)}`
        }
      />
    </Grid.Column>
  );
};

ForecastColumnDayIcon.propTypes = {
  condition: PropTypes.number.isRequired,
};

export default ForecastColumnDayIcon;
