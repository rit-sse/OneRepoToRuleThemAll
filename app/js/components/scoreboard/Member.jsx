import React, { PropTypes } from 'react';

const Member = ({
  name,
  count,
  index,
}) => (
  <tr>
    <td>{index}</td>
    <td>{name}</td>
    <td>{count}</td>
  </tr>
);

Member.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Member;
