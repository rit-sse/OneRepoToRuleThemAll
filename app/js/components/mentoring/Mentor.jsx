import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import 'scss/mentoring/mentor.scss';

export const MENTOR_TYPE = 'MENTOR';

const Mentor = ({
  user,
  editItem,
  deleteItem,
  lighten,
  handleHover,
  handleUnhover,
  showActions,
}) => {
  const { firstName, lastName, image } = user || {};
  return (
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
};

Mentor.defaultProps = {
  showActions: false,
  editItem() {},
  deleteItem() {},
};

export default Mentor;
