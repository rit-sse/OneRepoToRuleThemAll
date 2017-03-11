import React, { PropTypes } from 'react';

import 'scss/mentoring/mentor.scss';

const Mentor = ({
  user: {
    firstName,
    lastName,
    image,
  },
  editItem,
  deleteItem,
}) => (
  <div>
    <div className="mentor-box p-10">
      <img className="mentor-img" src={image} alt="Mentor" />
      <p className="text-center">
        {firstName} {lastName}
      </p>
      <div className="actions">
        <button className="btn btn-small btn-info" onClick={editItem}>
          <i className="fa fa-pencil" aria-hidden="true" />
        </button>
        <button className="btn btn-small btn-danger" onClick={deleteItem}>
          <i className="fa fa-trash-o" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
);

Mentor.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default Mentor;
