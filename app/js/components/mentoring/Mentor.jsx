import React, { PropTypes } from 'react';

import 'scss/mentoring/mentor.scss';

const Mentor = ({
  user: {
    firstName,
    lastName,
    image,
  },
}) => (
  <div>
    <div className="mentor-box p-10">
      <img className="mentor-img" src={image} alt="Mentor" />
      <p className="text-center">
        {firstName} {lastName}
      </p>
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
