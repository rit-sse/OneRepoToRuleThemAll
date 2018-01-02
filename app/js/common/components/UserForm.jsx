import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import yup from 'yup';
import { FormFeedback } from 'reactstrap';

class UserForm extends Component {
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      dce: PropTypes.string,
      image: PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    user: {},
  };

  render() {
    const {
      user,
      onSubmit,
    } = this.props;

    return (
      <Formik
        initialValues={{
          dce: user.dce || '',
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          image: user.image || '',
        }}
        validationSchema={() => yup.object()
          .shape({
            dce: yup.string()
              .matches(/^[a-z]{2,3}\d{4}$/, {
                message: 'A DCE is 2-3 letters followed by 4 numbers',
                excludeEmptyString: true,
              }),
            firstName: yup.string(),
            lastName: yup.string(),
            image: yup.string().url('Must be a valid URL'),
          })
        }
        onSubmit={(
          values
        ) => {
          onSubmit({
            ...values,
            // On these optional fields, the API expects 'null' instead of empty string ('')
            firstName: values.firstName || null,
            lastName: values.lastName || null,
            image: values.image || null,
          });
        }}
        enableReinitialize // This allows for firstName and lastName to be autofilled
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
        }) => (
          <fieldset className="form-group">
            <div className="form-group row">
              <label htmlFor="dce" className="col-3 col-form-label">DCE</label>
              <div className="col-9">
                <input
                  type="text"
                  name="dce"
                  id="dce"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={(e) => {
                    if (!errors.dce) {
                      this.props.getUser(values.dce);
                    }
                    handleBlur(e);
                  }}
                  value={values.dce}
                  required
                />
                {touched.dce
                  && errors.dce
                  && <FormFeedback style={{ display: 'block' }}>{errors.dce}</FormFeedback>}
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="firstName" className="col-3 col-form-label">First Name</label>
              <div className="col-9">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                {touched.firstName
                  && errors.firstName
                  && <FormFeedback style={{ display: 'block' }}>{errors.firstName}</FormFeedback>}
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="lastName" className="col-3 col-form-label">Last Name</label>
              <div className="col-9">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                {touched.lastName
                  && errors.lastName
                  && <FormFeedback style={{ display: 'block' }}>{errors.lastName}</FormFeedback>}
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="image" className="col-3 col-form-label">Image</label>
              <div className="col-9">
                <input
                  type="text"
                  name="image"
                  id="image"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.image}
                />
                {touched.image
                  && errors.image
                  && <FormFeedback style={{ display: 'block' }}>{errors.image}</FormFeedback>}
              </div>
            </div>
          </fieldset>
        )}
      />
    );
  }
}

export default UserForm;
