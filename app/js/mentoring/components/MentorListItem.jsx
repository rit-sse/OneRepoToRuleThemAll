import React from 'react';
import PropTypes from 'prop-types';
import AddMentor from 'mentoring/components/AddMentor';
import Mentor from 'mentoring/containers/Mentor';

const MentorListItem = (props) => {
  if (props.add) {
    return <AddMentor addItem={props.editItem} />;
  }

  return <Mentor {...props} />;
};

MentorListItem.propTypes = {
  add: PropTypes.bool,
  editItem: PropTypes.func.isRequired,
};

MentorListItem.defaultProps = {
  add: false,
};

export default MentorListItem;
