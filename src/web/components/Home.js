import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = ({ onPress, color }) => (
  <div className="hello-world">
    <button className="btn btn-light" onClick={onPress} style={{ color }}>Click Me</button>
  </div>
);

HelloWorld.propTypes = {
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default HelloWorld;
