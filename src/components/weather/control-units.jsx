import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

// add default unit and defined unit
// default is determined in parent and both units are passed in

const ControlUnits = (props) => {
  const {
    defaultUnit,
    definedUnit,
    activeUnit,
    changeType,
  } = props;

  return (
    <div className="attach-statistic">
      <Button.Group size="small">
        <Button
          positive={activeUnit}
          onClick={event => changeType(event)}
        >
          {ReactHtmlParser(defaultUnit)}
        </Button>
        <Button.Or />
        <Button
          positive={!activeUnit}
          onClick={event => changeType(event)}
        >
          {ReactHtmlParser(definedUnit)}
        </Button>
      </Button.Group>
    </div>
  );
};

ControlUnits.propTypes = {
  defaultUnit: PropTypes.string.isRequired,
  definedUnit: PropTypes.string.isRequired,
  activeUnit: PropTypes.bool.isRequired,
  changeType: PropTypes.func.isRequired,
};

export default ControlUnits;
