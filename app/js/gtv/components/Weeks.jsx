import React from 'react';
import PropTypes from 'prop-types';

import Week from './Week';


const Weeks = props => (
  <tbody>
    {props.weeks.map((week, i) => <Week week={week} index={i} key={`week-${i}`} />)}
  </tbody>
);

Weeks.propTypes = {
  weeks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
};

export default Weeks;
