import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'scss/homeEvents.scss';

class HomeEvent extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
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
        <Link to="/events">
          <h4 className="event-heading">{this.props.name}</h4>
        </Link>
        <h6 className="event-time">{this.getTime()}</h6>
        <h6 className="event-location">{this.props.location}</h6>
      </div>
    );
  }
}

export default HomeEvent;
