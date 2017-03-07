import React, { PropTypes } from 'react';
import AddMentor from 'components/mentoring/AddMentor';
import DraggableMentor from 'components/mentoring/DraggableMentor';
import Mentor from 'components/mentoring/Mentor';

const MentorListItem = (props) => {
  if (props.add) {
    return <AddMentor addItem={props.editItem} />;
  }

  return props.editMode ? <DraggableMentor {...props} /> : <Mentor {...props} />;
};

MentorListItem.propTypes = {
  add: PropTypes.bool,
  editMode: PropTypes.bool.isRequired,
  editItem: PropTypes.func.isRequired,
};

MentorListItem.defaultProps = {
  add: false,
};

export default MentorListItem;
