import React, { PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import Mentor from 'containers/mentoring/Mentor';
import { MENTOR_TYPE } from 'components/mentoring/Mentor';
import classnames from 'classnames';

import 'scss/mentoring/shift.scss';

const shiftTarget = {
  drop({ startTime, endTime, day }) {
    return { startTime, endTime, day };
  },
  canDrop(props, monitor) {
    return !props.mentors.find(mentor => mentor.id === monitor.getItem().id);
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

const Shift = ({
  mentors,
  connectDropTarget,
  isOver,
  canDrop,
  ...rest
}) => connectDropTarget(
  <div className={classnames('card', 'shift', { darken: isOver && canDrop })}>
    <div className="card-block d-flex flex-row align-items-start">
      { mentors.map(mentor => <Mentor key={mentor.id} {...mentor} {...rest} />)}
    </div>
  </div>
);

Shift.propTypes = {
  mentors: PropTypes.arrayOf(PropTypes.object).isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default DropTarget(MENTOR_TYPE, shiftTarget, collect)(Shift);
