import React from 'react';
import PropTypes from 'prop-types';

class SmoothImageDiv extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.string),
    imageUrl: PropTypes.string,
    delayMs: PropTypes.number,
    forceLoad: PropTypes.bool,
    onLoad: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    style: {},
    imageUrl: '',
    delayMs: 0,
    forceLoad: false,
    onLoad: () => {},
  };

  constructor(props) {
    super(props);
    let mountTime = null;
    let updated = null;

    if (this.props.delayMs > 0) {
      mountTime = Date.now();
      updated = mountTime;
    }

    this.state = {
      loading: true,
      mountTime,
      updated,
    };
  }

  componentDidMount() {
    if (this.props.delayMs > 0) {
      setTimeout(() => this.setState({
        updated: Date.now(),
      }), this.props.delayMs);
    }
    const img = new Image();
    img.onload = () => {
      this.setState({ loading: false });
      this.props.onLoad();
    };
    img.src = this.props.imageUrl;
  }

  render() {
    const style = {
      ...this.props.style,
      backgroundImage: `url(${this.props.imageUrl})`,
    };

    const classes = [this.props.className];
    // add loading class if image is still loading
    if (!this.props.forceLoad && (this.state.loading || ((this.state.mountTime + this.props.delayMs) > Date.now()))) {
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


export default SmoothImageDiv;
