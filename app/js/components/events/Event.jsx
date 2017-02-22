import React, { Component } from 'react';
import moment from 'moment';

import 'scss/event.scss';

class Event extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    loggedIn: React.PropTypes.bool.isRequired,
    endDate: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    startDate: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    editItem: React.PropTypes.func.isRequired,
    deleteItem: React.PropTypes.func.isRequired,
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
      <div className="event">
        <div className="heading">
          <h4 className="event-name">{this.props.name}</h4>
          { this.props.loggedIn ? (
            <div className="actions">
              <button className="btn btn-small btn-info" onClick={this.props.editItem}><i className="fa fa-pencil" aria-hidden="true" /> Edit</button>
              <button className="btn btn-small btn-danger" onClick={this.props.deleteItem}><i className="fa fa-trash-o" aria-hidden="true" /> Delete</button>
            </div>
            ) : null }
        </div>
        <p className="event-time">{this.getTime()}</p>
        <p className="event-location">Location: {this.props.location}</p>
        <p className="event-text">{this.props.description}</p>
      </div>
    );
  }
}

export default Event;
