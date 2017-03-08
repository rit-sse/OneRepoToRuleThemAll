import React from 'react';
import { Field } from 'redux-form';

const UserForm = () => (
  <fieldset className="form-group">
    <div className="form-group row">
      <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
      <div className="col-sm-10">
        <Field className="form-control-static" id="firstName" name="firstName" component="input" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
      <div className="col-sm-10">
        <Field className="form-control-static" id="lastName" name="lastName" component="input" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="dce" className="col-sm-2 col-form-label">DCE</label>
      <div className="col-sm-10">
        <Field className="form-control-static" id="dce" name="dce" component="input" type="text" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="image" className="col-sm-2 col-form-label">Image</label>
      <div className="col-sm-10">
        <Field className="form-control-static" id="image" name="image" component="input" type="text" />
      </div>
    </div>
  </fieldset>
);

export default UserForm;
