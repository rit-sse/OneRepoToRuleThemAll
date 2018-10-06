/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import 'scss/page.scss';

import NotFound from './NotFound';

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
      <NotFound />
    </div>
  );
};

Static.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Static;
