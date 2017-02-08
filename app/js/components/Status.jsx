/* eslint-disable no-unused-expressions */
import React from 'react';

const Status = props => (
  <div>
    {do {
      if (props.loading) {
        <i className="fa fa-spinner fa-3x fa-spin" style={{ margin: '0 auto', display: 'block', width: '45px' }} />;
      }
    }}
    {props.children}
  </div>
);

Status.propTypes = {
  children: React.PropTypes.node,
  loading: React.PropTypes.bool.isRequired,
};

Status.defaultProps = {
  loading: true,
  children: null,
};

export default Status;
