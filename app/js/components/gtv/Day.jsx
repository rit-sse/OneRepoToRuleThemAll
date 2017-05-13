import React from 'react';
import PropTypes from 'prop-types';

const Day = props => (
  <span>
    {props.day.events.map((event, k) => (
      <li key={`event-${props.weekIndex}-${props.dayIndex}-${k}`}>
        { event.name }
      </li>
    ))}
  </span>
);

Day.propTypes = {
  day: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  weekIndex: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  dayIndex: PropTypes.number.isRequired,
};

export default Day;
