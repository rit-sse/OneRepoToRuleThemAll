import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';

import Day from './Day';

function format(i) {
  return moment().day('Sunday').add(i, 'weeks').format('M/DD');
}


const Week = props => (
  <tr>
    <td className="gtv-calendar-weekcol">
      <h3>{format(props.index)}</h3>
    </td>
    {props.week.map((day, j) => {
      const classes = classnames({
        today: moment().isSame(day.date, 'day'),
      });
      return (
        <td
          key={`day-${props.index}-${j}`}
          className={classes}
        >
          <ul className="gtv-calendar-eventlist">
            <Day day={day} weekIndex={props.index} dayIndex={j} />
          </ul>
        </td>
      );
    })}
  </tr>
);

Week.propTypes = {
  week: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};

export default Week;
