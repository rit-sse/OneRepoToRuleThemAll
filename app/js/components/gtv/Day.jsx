import React, { PropTypes } from 'react';

const Day = (props) => {
  return (
    <span>
      {props.day.events.map((event, k) => {
        return (
          <li key={`event-${props.weekIndex}-${props.dayIndex}-${k}`}>
            { event.name }
          </li>
        );
      })}
    </span>
  );
};

Day.propTypes = {
  day: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  weekIndex: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  dayIndex: PropTypes.number.isRequired,
};

export default Day;
