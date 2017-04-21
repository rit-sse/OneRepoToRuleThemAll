import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

class UserForm extends Component {
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      dce: PropTypes.string,
      image: PropTypes.string,
    }),
    autofill: PropTypes.func.isRequired,
    name: PropTypes.string,
  };

  static defaultProps = {
    name: 'user',
    user: {},
  };

  componentDidUpdate(prevProps) {
    const {
      name,
      user,
      autofill,
    } = this.props;

    if (user && user.dce !== prevProps.user.dce) {
      autofill(name, user);
    }
  }

  getUser = (event, newValue) => this.props.getUser(newValue);

  render() {
    return (
      <fieldset className="form-group">
        <div className="form-group row">
          <label htmlFor="dce" className="col-sm-2 col-form-label">DCE</label>
          <div className="col-sm-10">
            <Field className="form-control" id="dce" name="dce" component="input" onBlur={this.getUser} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-10">
            <Field className="form-control" id="firstName" name="firstName" component="input" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-10">
            <Field className="form-control" id="lastName" name="lastName" component="input" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="image" className="col-sm-2 col-form-label">Image</label>
          <div className="col-sm-10">
            <Field className="form-control" id="image" name="image" component="input" />
          </div>
        </div>
      </fieldset>
    );
  }
}

export default UserForm;
