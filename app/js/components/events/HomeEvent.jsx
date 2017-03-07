import React, { Component } from 'react';
import moment from 'moment';
import 'scss/homeEvents.scss';

class HomeEvent extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    endDate: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    startDate: React.PropTypes.string.isRequired,
  };

  constructor() {
    super();

    this.getTime = this.getTime.bind(this);
  }

  getTime() {
    const date = 'dddd M/DD';
    const time = 'h:mm a';
    const start = moment(this.props.startDate);
    const end = moment(this.props.endDate);

    let dateString = start.format(`${date}, ${time}`);

    if (start.format(date) !== end.format(date)) {
      dateString += ` - ${end.format(`${date}, ${time}`)}`;
    } else {
      dateString += ` - ${end.format(time)}`;
    }
    return dateString;
  }

  render() {
    return (
      <div className="home-event bot-1">
        <h4 className="event-heading">{this.props.name}</h4>
        <p className="event-time">{this.getTime()}</p>
        <p className="event-location">{this.props.location}</p>
      </div>
    );
  }
}

export default HomeEvent;
