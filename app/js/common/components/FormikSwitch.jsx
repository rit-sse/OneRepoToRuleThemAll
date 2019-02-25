import React from 'react';
import Toggle from 'react-toggle';
import PropTypes from 'prop-types';

import 'react-toggle/style.css';

const FormikSwitch = props => (
  <label htmlFor={props.label}>
    <Toggle
      defaultChecked={props.defaultChecked}
      id={props.id}
      onChange={props.onChange}
    />
  </label>
);

FormikSwitch.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

FormikSwitch.defaultProps = {
  defaultChecked: false,
};

export default FormikSwitch;
