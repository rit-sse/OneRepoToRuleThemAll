/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'scss/page.scss';

function getPage(page) {
  try {
    return require('markdown/' + page + '.md'); // eslint-disable-line
  } catch (e) {
    return null;
  }
}

const Static = ({ location }) => {
  const page = getPage(location.pathname.replace(/^\//, ''));
  if (page) {
    return (
      <div className="container page static">
        <div dangerouslySetInnerHTML={{ __html: page }} />
      </div>
    );
  }
  return (
    <div className="container page">
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>
              4<span />4
            </h1>
          </div>
          <h2>Oops! Page Not Found</h2>
          <p>
            Sorry! The page you were trying to reach does not exist or no longer exists.
          </p>
          <Link to="/">Back to homepage</Link>
        </div>
      </div>
    </div>
  );
};

Static.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Static;
