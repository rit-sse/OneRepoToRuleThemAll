/* eslint-disable react/no-danger */
import React, { PropTypes } from 'react';
import 'scss/page.scss';

function getPage(page) {
  try {
    return require('markdown/' + page + '.md'); // eslint-disable-line
  } catch (e) {
    return null;
  }
}

const Static = ({ location }) => {
  const page = getPage(location.pathname.replace('/static/', ''));
  if (page) {
    return (
      <div className="container page">
        <div dangerouslySetInnerHTML={{ __html: page }} />
      </div>
    );
  }
  return (
    <div className="container page">
      <h4>Page Not Found</h4>
    </div>
  );
};

Static.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Static;
