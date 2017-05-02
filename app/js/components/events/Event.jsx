import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import SwipeArea from 'components/general/SwipeArea';

import 'scss/pane.scss';
import 'scss/event.scss';

class Event extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    endDate: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    description: PropTypes.string, // eslint-disable-line react/require-default-props
    editItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
  };

  constructor() {
    super();

    this.getTime = this.getTime.bind(this);
  }

  state = {
    shown: false,
  };

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

  showActions = () => {
    this.setState({
      shown: true,
    });
  }

  hideActions = () => {
    this.setState({
      shown: false,
    });
  };

  render() {
    return (
      <SwipeArea onLeft={this.showActions} onRight={this.hideActions} className="pane event">
        <div className="heading">
          <h4 className="title">{this.props.name}</h4>
          { this.props.loggedIn ? (
            <div className={this.state.shown ? 'actions shown' : 'actions'}>
              <button className="btn btn-small btn-info" onClick={this.props.editItem}><i className="fa fa-pencil" aria-hidden="true" /> Edit</button>
              <button className="btn btn-small btn-danger" onClick={this.props.deleteItem}><i className="fa fa-trash-o" aria-hidden="true" /> Delete</button>
            </div>
            ) : null }
        </div>
        <p className="event-time">{this.getTime()}</p>
        <p className="event-location">Location: {this.props.location}</p>
        <p className="event-text">{this.props.description}</p>
      </SwipeArea>
    );
  }
}

export default Event;
