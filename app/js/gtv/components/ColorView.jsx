import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ColorView extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    color: PropTypes.string.isRequired,
  };

  render() {
    const style = {
      backgroundColor: this.props.color,
    };
    return <section className="gtv-container" style={style} />;
  }
}

export default ColorView;
