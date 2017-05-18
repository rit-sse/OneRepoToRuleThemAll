import React from 'react';
import PropTypes from 'prop-types';

import 'scss/actions.scss';

const Actions = ({
  show,
  shown,
  children,
  editItem,
  deleteItem,
}) => (
  show ? (
    <div className={shown ? 'actions shown' : 'actions'}>
      {children}
      <button className="btn btn-small btn-info" onClick={editItem}>
        <i className="fa fa-pencil" aria-hidden="true" />
      </button>
      <button className="btn btn-small btn-danger" onClick={deleteItem}>
        <i className="fa fa-trash-o" aria-hidden="true" />
      </button>
    </div>
  ) : null
);

Actions.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node,
  shown: PropTypes.bool.isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

Actions.defaultProps = {
  children: [],
};

export default Actions;
