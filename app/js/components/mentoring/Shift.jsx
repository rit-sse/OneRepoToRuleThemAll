import React, { PropTypes } from 'react';
import Mentor from 'containers/mentoring/Mentor';
import DraggableMentor from 'components/mentoring/DraggableMentor';

const Shift = ({
  mentors,
  loggedIn,
}) => (
  <div className="card">
    <div className="card-block d-flex flex-row align-items-start">
      { mentors.map(mentor => (loggedIn ? <Mentor key={mentor.id} {...mentor} /> : <DraggableMentor key={mentor.id} {...mentor} />)) }
    </div>
  </div>
);

Shift.propTypes = {
  mentors: PropTypes.arrayOf(PropTypes.object).isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Shift;
