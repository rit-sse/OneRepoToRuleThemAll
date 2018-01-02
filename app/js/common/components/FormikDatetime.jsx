import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';

import 'react-datetime/css/react-datetime.css';

// See: https://github.com/jaredpalmer/formik#why-use-setfieldvalue-instead-of-handlechange
class FormikDatetime extends Component {
  static propTypes = {
    inputProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    value: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
    field: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired, // setFieldValue
    onBlur: PropTypes.func.isRequired, // setFieldTouched
  };

  static defaultProps = {
    inputProps: {},
  };

  handleChange = (value) => {
    this.props.onChange(this.props.field, value);
  };

  handleBlur = () => {
    this.props.onBlur(this.props.field, true);
  };

  render() {
    const {
      inputProps,
      value,
    } = this.props;

    return (
      <Datetime
        inputProps={inputProps}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        value={value}
      />
    );
  }
}

export default FormikDatetime;
