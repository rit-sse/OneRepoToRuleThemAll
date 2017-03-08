import React, { PropTypes } from 'react';
import { Creatable } from 'react-select';
import 'react-select/dist/react-select.css';

const SelectInput = props => (
  <Creatable
    {...props}
    value={props.input.value}
    onChange={value => props.input.onChange(value)}
    onBlur={() => props.input.onBlur(props.input.value)}
    options={props.options}
  />
);

SelectInput.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.array,
    ]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }).isRequired,
  options: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default SelectInput;
