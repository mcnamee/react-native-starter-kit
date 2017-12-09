import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="row">
    <div className="col-lg-4">
      <h2>Heading</h2>
      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      <p><Link className="btn btn-primary" to="/" role="button">View details &raquo;</Link></p>
    </div>
    <div className="col-lg-4">
      <h2>Heading</h2>
      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      <p><Link className="btn btn-primary" to="/" role="button">View details &raquo;</Link></p>
    </div>
    <div className="col-lg-4">
      <h2>Heading</h2>
      <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
      <p><Link className="btn btn-primary" to="/" role="button">View details &raquo;</Link></p>
    </div>
  </div>
);

export default About;
