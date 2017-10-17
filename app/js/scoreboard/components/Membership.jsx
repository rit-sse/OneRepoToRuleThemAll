import React from 'react';
import PropTypes from 'prop-types';
import 'scss/buttons.scss';

const Membership = ({
  editItem,
  deleteItem,
  id,
  user,
  reason,
  userDce,
  committeeName,
}) => (
  <tr>
    <td>{userDce}</td>
    <td>{`${user.firstName} ${user.lastName}`}</td>
    <td>{reason}</td>
    <td>{committeeName}</td>
    <td className="btn-group">
      <button onClick={() => deleteItem(id)} className="btn btn-secondary">Deny</button>
      <button onClick={() => editItem(id)} className="btn btn-sse">Approve</button>
    </td>
  </tr>
);

Membership.propTypes = {
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  userDce: PropTypes.string.isRequired,
  reason: PropTypes.string.isRequired,
  committeeName: PropTypes.string.isRequired,
};

export default Membership;
