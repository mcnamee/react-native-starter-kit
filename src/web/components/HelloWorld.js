import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = ({ onClick, color }) => (
  <div className="hello-world">
    <button onClick={onClick} style={{ color }}>Hello World</button>
  </div>
);

HelloWorld.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default HelloWorld;
