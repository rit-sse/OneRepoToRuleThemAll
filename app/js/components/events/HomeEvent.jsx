import React from 'react';

const HomeEvent = props => (
  <div className="home-event">
    <h4 className="event-heading">{props.name}</h4>
    <p className="event-time">{props.startDate} {props.endDate}</p>
    <p className="event-location">{props.location}</p>
  </div>
);

HomeEvent.propTypes = {
  name: React.PropTypes.string.isRequired,
  endDate: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  startDate: React.PropTypes.string.isRequired,
};

export default HomeEvent;
