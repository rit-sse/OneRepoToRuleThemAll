import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HomeEvent from 'events/components/HomeEvent';

import 'scss/homeEvents.scss';

class HomeEvents extends Component {
  static propTypes = {
    getEvents: PropTypes.func.isRequired,
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  componentDidMount() {
    if (this.props.events.length === 0) {
      this.props.getEvents();
    }
  }

  render() {
    const events = this.props.events.map(el => (
      <HomeEvent
        key={el.id}
        {...el}
      />
    ));
    return (
      <div className="home-events">
        {events}
        <Link className="link" to="/events">More Events...</Link>
      </div>
    );
  }
}

export default HomeEvents;
