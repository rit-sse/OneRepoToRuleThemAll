import React, { PropTypes } from 'react';

import Week from './Week';


const Weeks = (props) => {
  return (
    <tbody>
      {props.weeks.map((week, i) => {
        return (
          <Week week={week} index={i} key={`week-${i}`} />
        );
      })}
    </tbody>
  );
};

Weeks.propTypes = {
  weeks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
};

export default Weeks;
