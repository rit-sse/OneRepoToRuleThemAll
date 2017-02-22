import React from 'react';

const Button = props => (
  props.shown ? <button className={props.className} onClick={props.onClick}>{props.label}</button> : null
);

Button.propTypes = {
  shown: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
};

export default Button;
