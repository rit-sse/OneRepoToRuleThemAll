import React, { PropTypes } from 'react';

import 'scss/mentoring/mentor.scss';

const AddMentor = props => (
  <button onClick={props.addItem} className="btn btn-link p-0">
    <div className="mentor-add">
      <i className="fa fa-plus fa-5x" />
    </div>
  </button>
);

AddMentor.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default AddMentor;
