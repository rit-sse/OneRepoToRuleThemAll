import React from 'react';
import PropTypes from 'prop-types';
import 'scss/buttons.scss';

const Button = ({ shown, children, ...props }) => (
  shown ? <button {...props}>{children}</button> : null
);

Button.propTypes = {
  shown: PropTypes.bool.isRequired,
  onClick: PropTypes.func, // eslint-disable-line react/require-default-props
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string.isRequired,
};

Button.defaultProps = {
  shown: true,
};

export default Button;
