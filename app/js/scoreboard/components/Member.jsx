/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { gravatar } from 'utils/images';

import 'scss/member.scss';

const Row = styled.tr`
  background: ${(props) => {
    switch (props.index) {
      case 1:
        return 'linear-gradient(to bottom right, #ffe84d -50%, gold, #ffe84d 150%)';
      case 2:
        return 'linear-gradient(to bottom right, white -50%, #d8d6d1, white 200%)';
      case 3:
        return 'linear-gradient(to bottom right, #e0964d -150%, #cc8062, #e0964d 150%)';
      default:
        return '';
    }
  }};

  td {
    border: ${(props) => {
      switch (props.index) {
        case 1:
        case 2:
        case 3:
          return 'none';
        default:
          return '';
      }
    }};
  }
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
