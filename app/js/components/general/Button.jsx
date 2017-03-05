import React, { PropTypes } from 'react';
import 'scss/buttons.scss';

const Button = props => (
  props.shown ? <button className={props.className} onClick={props.onClick}>{props.children}</button> : null
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
