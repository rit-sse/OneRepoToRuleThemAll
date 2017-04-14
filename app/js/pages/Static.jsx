/* eslint-disable react/no-danger */
import React, { PropTypes } from 'react';

function getPage(page) {
  return require('markdown/' + page + '.md'); // eslint-disable-line
}

const Static = ({ location }) => {
  const page = getPage(location.pathname.replace('/static/', ''));

  return (
    <div className="container page">
      <div dangerouslySetInnerHTML={{ __html: page }} />
    </div>
  );
};

Static.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Static;
