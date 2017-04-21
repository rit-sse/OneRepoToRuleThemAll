import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class EventPanelsEvent extends Component {
  static propTypes = {
    event: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  isOneDay = () => {
    return moment(this.props.event.startDate).isSame(moment(this.props.event.endDate), 'day');
  }

  fullStartDay = () => {
    return moment(this.props.event.startDate).format('dddd, MMMM D');
  }

  timeRange = () => {
    return `${moment(this.props.event.startDate).format('h:mm a')} to ${moment(this.props.event.endDate).format('h:mm a')}`;
  }

  startDay = () => {
    return `${moment(this.props.event.startDate).format('MMMM D')}, ${moment(this.props.event.startDate).format('h:mm a')}`;
  }

  endDay = () => {
    return `${moment(this.props.event.endDate).format('MMMM D')}, ${moment(this.props.event.endDate).format('h:mm a')}`;
  }

  render() {
    if (this.isOneDay()) {
      return (
        <div>
          <div className="gtv-event-data">
            <span>{ this.fullStartDay() }</span>
          </div>
          <div className="gtv-event-data">
            <span>{ this.timeRange() }</span>
          </div>
          <div className="gtv-event-data faded">
            <span>{ this.props.event.location }</span>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="gtv-event-data">
          <span>{ this.startDay() } to</span>
        </div>
        <div className="gtv-event-data">
          <span>{ this.endDay() }</span>
        </div>
        <div className="gtv-event-data faded">
          <span>{ this.props.event.location }</span>
        </div>
      </div>
    );
  }
}

export default EventPanelsEvent;
