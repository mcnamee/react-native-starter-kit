import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <Link className="nav-link active" to="/about">Overview <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">Reports</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">Analytics</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">Export</Link>
      </li>
    </ul>

    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <Link className="nav-link" to="/about">Nav item</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">Nav item again</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">One more nav</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">Another nav item</Link>
      </li>
    </ul>

    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <Link className="nav-link" to="/about">Nav item again</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">One more nav</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">Another nav item</Link>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
