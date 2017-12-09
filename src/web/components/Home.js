import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = ({ onClick, color }) => (
  <div className="hello-world">
    <button className="btn btn-light" onClick={onClick} style={{ color }}>Click Me</button>
  </div>
);

HelloWorld.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default HelloWorld;
