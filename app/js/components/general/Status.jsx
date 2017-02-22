/* eslint-disable no-unused-expressions */
import React from 'react';

// TODO: Add fancy animations

const Status = props => (
  <div>
    {do {
      if (props.error) {
        <div className="alert alert-danger">
          <button type="button" className="close" aria-label="Close" onClick={props.close}>
            <span aria-hidden="true">&times;</span>
          </button>
          <strong>{props.error}</strong>
        </div>;
      } else if (props.loading) {
        <i className="fa fa-spinner fa-3x fa-spin" style={{ margin: '0 auto', display: 'block', width: '45px' }} />;
      }
    }}
  </div>
);

Status.propTypes = {
  close: React.PropTypes.func.isRequired,
  error: React.PropTypes.string.isRequired,
  loading: React.PropTypes.bool.isRequired,
};

export default Status;
