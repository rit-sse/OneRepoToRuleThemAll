import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import 'scss/mentoring/specialty.scss';

const Specialty = ({
  name,
  lighten,
  handleHover,
  handleUnhover,
}) => (
  <span
    className={classnames('badge', 'badge-pill', 'badge-specialty', { lighten })}
    onMouseOver={handleHover}
    onMouseOut={handleUnhover}
  >

    {name}
  </span>
);

Specialty.propTypes = {
  name: PropTypes.string.isRequired,
  lighten: PropTypes.bool.isRequired,
  handleHover: PropTypes.func.isRequired,
  handleUnhover: PropTypes.func.isRequired,
};

export default Specialty;
