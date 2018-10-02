import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TorqueSlides, { TorqueSlide } from 'torque-react';
import { getEvents } from 'events/actions';
import ColorView from 'gtv/components/ColorView';
import EventPanels from 'gtv/containers/EventPanels';
import EventHighlight from 'gtv/containers/EventHighlight';
import ThreeWeek from 'gtv/containers/ThreeWeek';
import { getThreeWeekEvents } from 'gtv/actions';

import 'scss/gtv.scss';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    getEvents: () => dispatch(getEvents()),
    getThreeWeekEvents: () => dispatch(getThreeWeekEvents()),
  };
}

class GTV extends Component {
  static propTypes = {
    getEvents: PropTypes.func.isRequired,
    getThreeWeekEvents: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.getEvents();
    this.props.getThreeWeekEvents();
    this.intervals = [];
  }

  componentDidMount() {
    this.setInterval(() => this.props.getEvents(), 30000);
    this.setInterval(() => this.props.getThreeWeekEvents(), 30000);
  }

  componentWillUnmount() {
    this.intervals.map(clearInterval);
  }

  setInterval(...args) {
    this.intervals.push(setInterval(...args));
  }

  render() {
    return (
      <div className="gtv" >
        <TorqueSlides duration={30} keyboardInteractive >
          <TorqueSlide>
            <EventPanels />
          </TorqueSlide>
          <TorqueSlide duration={5}>
            <ColorView color="white" />
          </TorqueSlide>
          <TorqueSlide duration={15}>
            <EventHighlight />
          </TorqueSlide>
          <TorqueSlide>
            <ThreeWeek />
          </TorqueSlide>
          <TorqueSlide duration={5}>
            <ColorView color="black" />
          </TorqueSlide>
        </TorqueSlides>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GTV);
