import React, { PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import classnames from 'classnames';

import 'scss/mentoring/mentor.scss';

export const MENTOR_TYPE = 'MENTOR';

const mentorSource = {
  beginDrag({ id, shiftId }) {
    return { id, shiftId };
  },

  endDrag(props, monitor) {
    const mentor = monitor.getItem();
    const shiftId = mentor.shiftId;
    if (monitor.didDrop()) {
      const shift = { mentorId: props.id, ...monitor.getDropResult() };
      if (shiftId) {
        props.updateShift(shiftId, shift);
      } else {
        props.createShift(shift);
      }
    } else if (shiftId) {
      props.destroyShift(shiftId);
    }
  },
  canDrag(props) {
    return props.loggedIn;
  },
};

function collect(connect) {
  return {
    connectDragSource: connect.dragSource(),
  };
}

const Mentor = ({
  user,
  editItem,
  deleteItem,
  lighten,
  handleHover,
  handleUnhover,
  showActions,
  connectDragSource,
}) => {
  const { firstName, lastName, image } = user || {};
  return connectDragSource(
    <div>
      <div
        className={classnames('mentor-box', 'p-10', { lighten })}
        onMouseOver={handleHover}
        onMouseOut={handleUnhover}
      >
        <img className="mentor-img" src={image} alt="Mentor" />
        <p className="text-center m-0">
          {firstName} {lastName}
        </p>
        { showActions ?
          (<div className="actions">
            <button className="btn btn-small btn-info" onClick={editItem}>
              <i className="fa fa-pencil" aria-hidden="true" />
            </button>
            <button className="btn btn-small btn-danger" onClick={deleteItem}>
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
          </div>) :
        null }
      </div>
    </div>
  );
};

Mentor.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  editItem: PropTypes.func,
  deleteItem: PropTypes.func,
  lighten: PropTypes.bool.isRequired,
  handleHover: PropTypes.func.isRequired,
  handleUnhover: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
  connectDragSource: PropTypes.func.isRequired,
};

Mentor.defaultProps = {
  showActions: false,
  editItem() {},
  deleteItem() {},
};

export default DragSource(MENTOR_TYPE, mentorSource, collect)(Mentor);
