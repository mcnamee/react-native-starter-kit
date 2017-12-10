import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const HelloWorld = ({ onPress, color }) => (
  <div>
    <Button color="light" onClick={onPress} style={{ color }}>Click Me</Button>
  </div>
);

HelloWorld.propTypes = {
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default HelloWorld;
