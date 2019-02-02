/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { gravatar } from 'utils/images';

import 'scss/member.scss';

const Medal = styled.i`
  color: ${props => {
    switch (props.index) {
      case 1:
        return 'gold;';
      case 2:
        return '#d8d6d1;'
      case 3:
        return '#cc8062;';
      default:
        return 'rgba(0, 0, 0, 0);';
    }
  }}
  margin: 4px; 
`;

const Row = styled.tr`
`;

const Member = ({
  dce,
  name,
  count,
  index,
  viewItem,
}) => (
  <Row onClick={viewItem} className="member" index={index}>
    <td style={{ width: '15%' }}>{index}</td>
    <td>
      <Medal index={index}>
        <i className="fas fa-medal"></i>
      </Medal>
      <img src={gravatar(dce)} alt="Member" className="gravatar" />
      <div className="name">
        {name}
      </div>
    </td>
    <td style={{ width: '15%' }}>{count}</td>
  </Row>
);

Member.propTypes = {
  dce: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  viewItem: PropTypes.func.isRequired,
};

export default Member;
