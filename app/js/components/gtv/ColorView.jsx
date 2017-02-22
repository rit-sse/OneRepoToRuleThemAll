import React, { PropTypes } from 'react';

const ColorView = (props) => {
  const style = {
    backgroundColor: props.color,
  };
  return <section className="container" style={style} />;
};

ColorView.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorView;
