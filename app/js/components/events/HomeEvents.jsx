import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeEvent from 'components/events/HomeEvent';
import 'scss/homeEvents.scss';

class HomeEvents extends Component {
  static propTypes = {
    getEvents: React.PropTypes.func.isRequired,
    events: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  };

  componentDidMount() {
    this.props.getEvents();
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
