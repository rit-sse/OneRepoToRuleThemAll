import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { TorqueSlides, TorqueSlide } from 'torque-react';
import ColorView from 'components/gtv/ColorView';
import EventPanels from 'containers/gtv/EventPanels';
import EventHighlight from 'containers/gtv/EventHighlight';
import ThreeWeek from 'containers/gtv/ThreeWeek';
import { getEvents, getThreeWeekEvents } from 'actions/events';

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
