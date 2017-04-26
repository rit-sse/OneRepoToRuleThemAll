import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import 'scss/pane.scss';

const Tags = ({
  tags,
  link,
  approved,
  filterTag,
}) => {
  const tagLinks = tags.map(tag => (
    <Link key={tag.name} to={`/qdb/${link}?tag=${tag.name}`} onClick={() => filterTag(tag.name, approved)} className="tag">
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
  filterTag: PropTypes.func.isRequired,
  approved: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

Tags.defaultProps = {
  approved: 'null',
};

export default Tags;
