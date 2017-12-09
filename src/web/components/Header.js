import React from 'react';
import { Link } from 'react-router-dom';
import Config from '../../constants/config';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
      <Link className="navbar-brand" to="/">{Config.appName}</Link>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Help</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
