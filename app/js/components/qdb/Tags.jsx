import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import 'scss/pane.scss';

const Tags = ({
  tags,
  link,
}) => {
  const tagLinks = tags.map(tag => (
    <Link key={tag.name} to={`/qdb/${link}?tag=${tag.name}`} className="tag">
      <span className="badge badge-primary">{tag.name}</span>
    </Link>
  ));

  return (
    <div className="tags">{tagLinks}</div>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  link: PropTypes.string.isRequired,
};

Tags.defaultProps = {
  approved: 'null',
};

export default Tags;
