import React, { PropTypes } from 'react';
import AddMentor from 'components/mentoring/AddMentor';
import DraggableMentor from 'components/mentoring/DraggableMentor';
import Mentor from 'containers/mentoring/Mentor';

const MentorListItem = (props) => {
  if (props.add) {
    return <AddMentor addItem={props.editItem} />;
  }

  return props.loggedIn ? <DraggableMentor {...props} /> : <Mentor {...props} />;
};

MentorListItem.propTypes = {
  add: PropTypes.bool,
  loggedIn: PropTypes.bool.isRequired,
  editItem: PropTypes.func.isRequired,
};

MentorListItem.defaultProps = {
  add: false,
};

export default MentorListItem;
