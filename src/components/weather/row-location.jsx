import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const RowLocation = (props) => {
  const { name, region, country } = props;
  return (
    <Grid.Row columns={1}>
      <Grid.Column>
        {`Location: ${name}, ${region}, ${country}`}
      </Grid.Column>
    </Grid.Row>
  );
};

RowLocation.propTypes = {
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default RowLocation;