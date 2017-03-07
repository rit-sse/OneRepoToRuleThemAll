import React, { PropTypes } from 'react';

import 'scss/mentoring/mentor.scss';

const Mentor = props => (
  <div>
    <div className="mentor-box">
      <img className="mentor-img" src={props.user.image} alt="Mentor" />
    </div>
  </div>
);

Mentor.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Mentor;
