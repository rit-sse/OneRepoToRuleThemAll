import React, { PropTypes } from 'react';


const Mentor = (props) => {
  if (props.add) {
    return null;
  }

  return <div />;
};

Mentor.propTypes = {
  add: PropTypes.bool,
};

Mentor.defaultProps = {
  add: false,
};

export default Mentor;
