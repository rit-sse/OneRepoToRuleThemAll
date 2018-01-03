import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

// See: https://github.com/jaredpalmer/formik#why-use-setfieldvalue-instead-of-handlechange
class FormikSelect extends Component {
  static propTypes = {
    field: PropTypes.string.isRequired,
    input: PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.node, // {value, label}
        PropTypes.array, // If 'multi' select
      ]),
      onChange: PropTypes.func, // setFieldValue
      onBlur: PropTypes.func, // setFieldTouched
    }).isRequired,
    options: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  handleChange = (value) => {
    this.props.input.onChange(this.props.field, value);
  };

  handleBlur = () => {
    this.props.input.onBlur(this.props.field, true);
  };

  render() {
    return (
      <Select
        {...this.props}
        options={this.props.options}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        value={this.props.input.value}
      />
    );
  }
}

export default FormikSelect;
