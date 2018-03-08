import React from 'react';
import PropTypes from 'prop-types';

import { gravatar } from 'utils/images';

import 'scss/member.scss';

const User = ({
  dce,
  firstName,
  lastName,
  viewItem,
}) => (
  <tr onClick={viewItem} className="member">
    <td>
      <img src={gravatar(dce)} alt="Member" className="gravatar" />
      <div className="name">
        {firstName} {lastName}
      </div>
    </td>
    <td>{dce}</td>
  </tr>
);

User.propTypes = {
  dce: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  viewItem: PropTypes.func.isRequired,
};

User.defaultProps = {
  firstName: '',
  lastName: '',
};

export default User;
