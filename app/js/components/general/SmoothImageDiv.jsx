import React from 'react';
import PropTypes from 'prop-types';

class SmoothImageDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      mountTime: null,
      updated: null,
    };
  }

  componentWillMount() {
    if (this.props.delayMs > 0) {
      const mountTime = Date.now();
      this.setState({
        mountTime,
        updated: mountTime,
      });
      setTimeout(() => this.setState({
        updated: Date.now(),
      }), this.props.delayMs);
    }
    const img = new Image();
    img.onload = () => this.setState({ loading: false });
    img.src = this.props.imageUrl;
  }

  render() {
    const style = Object.assign({}, this.props.style, {
      backgroundImage: `url(${this.props.imageUrl})`,
    });

    const classes = [this.props.className];
    // add loading class if image is still loading
    if (this.state.loading || ((this.state.mountTime + this.props.delayMs) > Date.now())) {
      classes.push('loading');
    }
    return (
      <div
        className={classes.join(' ')}
        style={style}
      />
    );
  }
}

SmoothImageDiv.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  imageUrl: PropTypes.string,
  delayMs: PropTypes.number,
};

SmoothImageDiv.defaultProps = {
  className: '',
  style: {},
  imageUrl: '',
  delayMs: 0,
};

export default SmoothImageDiv;
