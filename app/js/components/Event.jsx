import React, { Component } from 'react';
import moment from 'moment';

import 'scss/event.scss';

class Event extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    endTime: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    startTime: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    name: 'Dank Memes',
    endTime: '2017-02-01T21:00:00.000Z',
    location: 'SSE Lab',
    startTime: '2017-02-01T20:00:00.000Z',
    description: 'Danker Memes',
  };

  constructor() {
    super();

    this.getTime = this.getTime.bind(this);
  }

  getTime() {
    const date = 'dddd M/DD';
    const time = 'h:mm a';
    const start = moment(this.props.startTime);
    const end = moment(this.props.endTime);

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
      <div className="event">
        <h4 className="event-name">{this.props.name}</h4>
        <p className="event-time">{this.getTime()}</p>
        <p className="event-location">location: {this.props.location}</p>
        <p className="event-text">{this.props.description}</p>
      </div>
    );
  }
}

export default Event;
