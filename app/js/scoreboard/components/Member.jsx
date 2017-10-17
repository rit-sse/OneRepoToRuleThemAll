/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { gravatar } from 'utils/images';
import 'scss/member.scss';

const Member = ({
  dce,
  name,
  count,
  index,
  viewItem,
}) => (
  <tr onClick={viewItem} className="member">
    <td>{index}</td>
    <td>
      <img src={gravatar(dce)} alt="Member" className="gravatar" />
      <div className="name">
        {name}
      </div>
    </td>
    <td>{count}</td>
  </tr>
);

Member.propTypes = {
  dce: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  viewItem: PropTypes.func.isRequired,
};

export default Member;
