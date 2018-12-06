import React from 'react';

// JSX

import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*

A stateless component that has the links to each component. The use of links
avoids the page reload.

*/

let Header = props => {
  const { title } = props;
  return (
    <div className="p-3 mb-2 bg-primary text-white">
      <div className="row justify-content-between ml-3 mr-3">
        <h1>{title}</h1>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="navbar-brand text-white">
                <i className="fas fa-home" /> Home
              </Link>
              <Link to="/start" className="navbar-brand text-white">
                <i className="fas fa-start" /> Start
              </Link>
              <Link to="/about" className="navbar-brand text-white">
                <i className="fas fa-question-circle" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// In case there's no title defined on the Header tag from App.js
Header.defaultProps = {
  title: 'My App'
};

Header.propTypes = {
  title: propTypes.string.isRequired
};

export default Header;
