import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SwipeArea extends Component {
  static propTypes = {
    style: PropTypes.object, // eslint-disable-line
    onLeft: PropTypes.func,
    onRight: PropTypes.func,
    onUp: PropTypes.func,
    onDown: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    onLeft: () => {},
    onRight: () => {},
    onUp: () => {},
    onDown: () => {},
    style: {},
    className: '',
  };

  componentDidMount() {
    const {
      onLeft,
      onRight,
      onUp,
      onDown,
    } = this.props;

    const swipeDet = {
      sX: 0,
      sY: 0,
      eX: 0,
      eY: 0,
    };

    const minX = 20; // min x swipe for horizontal swipe
    const maxX = 40; // max x difference for vertical swipe
    const minY = 40; // min y swipe for vertical swipe
    const maxY = 50; // max y difference for horizontal swipe

    this.area.addEventListener('touchstart', (e) => {
      const t = e.touches[0];
      swipeDet.sX = t.screenX;
      swipeDet.sY = t.screenY;
    }, false);

    this.area.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const t = e.touches[0];
      swipeDet.eX = t.screenX;
      swipeDet.eY = t.screenY;
    }, false);

    this.area.addEventListener('touchend', () => {
      // horizontal detection
      if ((((swipeDet.eX - minX > swipeDet.sX) || (swipeDet.eX + minX < swipeDet.sX)) && ((swipeDet.eY < swipeDet.sY + maxY) && (swipeDet.sY > swipeDet.eY - maxY)))) {
        if (swipeDet.eX > swipeDet.sX) onRight();
        else onLeft();
      }

      // vertical detection
      if ((((swipeDet.eY - minY > swipeDet.sY) || (swipeDet.eY + minY < swipeDet.sY)) && ((swipeDet.eX < swipeDet.sX + maxX) && (swipeDet.sX > swipeDet.eX - maxX)))) {
        if (swipeDet.eY > swipeDet.sY) onDown();
        else onUp();
      }
    }, false);
  }

  render() {
    const {
      style,
      children,
      className,
    } = this.props;

    return (
      <div className={className} style={style} ref={(c) => { this.area = c; }}>
        {children}
      </div>
    );
  }
}

export default SwipeArea;
