import React, { PropTypes } from 'react';
import Shift from 'components/mentoring/Shift';
import ShiftHeader from 'components/mentoring/ShiftHeader';

const ShiftGridItem = (props) => {
  if (props.header) {
    return <ShiftHeader {...props} />;
  }
  return <Shift {...props} />;
};

ShiftGridItem.propTypes = {
  header: PropTypes.string, // eslint-disable-line react/require-default-props
};

export default ShiftGridItem;

