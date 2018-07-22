import React from 'react';
import PropTypes from 'prop-types';
// External Libraries
import ReactHtmlParser from 'react-html-parser';

const UnitTemperature = (props) => {
  const { unit } = props;

  return (
    <sup>
      {ReactHtmlParser(unit)}
    </sup>
  );
};

UnitTemperature.propTypes = {
  unit: PropTypes.string.isRequired,
};

export default UnitTemperature;
