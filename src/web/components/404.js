import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="row">
    <div className="col-lg-4">
      <h2>404</h2>
      <p>Sorry, the route you requested doesn't exist</p>
      <p><Link className="btn btn-primary" to="/" role="button">Go Home &raquo;</Link></p>
    </div>
  </div>
);

export default NotFound;
