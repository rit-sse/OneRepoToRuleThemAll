import React, { PropTypes } from 'react';

const ShiftHeader = ({ header }) => (
  <div className="card text-center">
    <div className="card-block">
      <h5 className="card-title">{header}</h5>
    </div>
  </div>
);

ShiftHeader.propTypes = {
  header: PropTypes.string.isRequired,
};

export default ShiftHeader;
