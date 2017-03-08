import React, { PropTypes } from 'react';

import 'scss/mentoring/mentor.scss';

const AddMentor = ({ addItem }) => (
  <button onClick={addItem} className="btn mentor-add d-flex align-items-center justify-content-center">
    <i className="fa fa-plus fa-5x" />
  </button>
);

AddMentor.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default AddMentor;
