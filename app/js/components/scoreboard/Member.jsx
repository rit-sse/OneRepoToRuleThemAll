/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { PropTypes } from 'react';

const Member = ({
  name,
  count,
  index,
  viewItem,
}) => (
  <tr onClick={viewItem}>
    <td>{index}</td>
    <td>{name}</td>
    <td>{count}</td>
  </tr>
);

Member.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  viewItem: PropTypes.func.isRequired,
};

export default Member;
