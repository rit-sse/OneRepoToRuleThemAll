import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ shown, children, ...props }) => (
  shown ? <Link {...props}>{children}</Link> : null
);

ButtonLink.propTypes = {
  shown: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
  shown: true,
};

export default ButtonLink;
