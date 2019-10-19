import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, InputGroup, FormFeedback } from 'reactstrap';
import moment from 'moment';

import yup from 'utils/yup';
import Button from 'common/components/Button';
import UserForm from 'common/containers/UserForm';
import FormikSelectInput from 'common/components/FormikSelectInput';

class OfficerForm extends Component {
  static propTypes = {
    officer: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      committeeName: PropTypes.string,
      email: PropTypes.string,
      primaryOfficer: PropTypes.bool,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      linkedinUrl: PropTypes.string,
      user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        dce: PropTypes.string,
        image: PropTypes.string,
      }),
    }),
    committees: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })).isRequired,
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    getCommittees: PropTypes.func.isRequired,
  };

  static defaultProps = {
    officer: {},
  };

  componentDidMount() {
    this.props.getCommittees();
  }

  render() {
    const {
      isOpen,
      close,
      officer,
      committees,
      create,
      update,
    } = this.props;

    const updateOrCreate = officer.id ? 'Update' : 'Create';
    const dayFormat = 'YYYY-MM-DD';
    const primaryOfficerCommitteeSelectOption = { label: 'General', value: 'General' };

    return (
      <Modal isOpen={isOpen} toggle={close}>
        <ModalHeader toggle={close}>{updateOrCreate} Officer</ModalHeader>
        <UserForm
          user={officer.user}
          initialValues={{
            title: officer.title || '',
            email: officer.email || '',
            committeeName: officer.committeeName // eslint-disable-line no-nested-ternary
              ? { label: officer.committeeName, value: officer.committeeName }
              : officer.primaryOfficer ? primaryOfficerCommitteeSelectOption : null,
            primaryOfficer: !!officer.primaryOfficer,
            startDate: officer.startDate ? moment(officer.startDate).format(dayFormat) : '',
            endDate: officer.endDate ? moment(officer.endDate).format(dayFormat) : '',
            linkedinUrl: officer.linkedinUrl || null,
          }}
          validationSchema={yup.object()
            .shape({
              title: yup.string().required('Required'),
              email: yup.string().required('Required'),
              committeeName: yup.object()
                .shape({
                  label: yup.mixed(),
                  value: yup.mixed(),
                })
                .required('Required')
                .nullable(), // react-select uses 'null' to represent when the value is cleared
              primaryOfficer: yup.boolean(),
              startDate: yup.date().required('Required'),
              endDate: yup.date()
                .when('startDate', {
                  is: val => !!val,
                  then: yup.date().isAfter(yup.ref('startDate'), 'End Date must come after Start Date'),
                }),
                // TODO: 'endDate' is not required, but since we have to set it's default
                // value to '' for formik to use it as a controlled component, the 'isAfter'
                // validation will be active, effectively requiring a value. We need to figure
                // out how to have yup validate a field only if the field isn't empty (something other than '').
              linkedinUrl: yup.string().url('Must be a URL.').nullable(),
            })}
          onSubmit={(
            values
          ) => {
            const newOfficer = {
              title: values.title,
              committeeName: values.committeeName.value, // Parse out the 'select' value
              email: values.email,
              primaryOfficer: values.primaryOfficer,
              startDate: moment(values.startDate).toISOString(),
              endDate: values.endDate ? moment(values.endDate).toISOString() : null,
              linkedinUrl: values.linkedinUrl,
              user: {
                firstName: values.firstName,
                lastName: values.lastName,
                dce: values.dce,
                image: values.image,
              },
              userDce: values.dce, // Helps in setting up the relation between User and Officer
            };

            close();

            if (officer.id) {
              update(officer.id, newOfficer);
            } else {
              create(newOfficer);
            }
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
            setFieldTouched,
          }) => (
            <fieldset className="form-group">
              <div className="form-group row">
                <label htmlFor="title" className="col-4 col-form-label">Title</label>
                <div className="col-8">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    required
                  />
                  {touched.title
                    && errors.title
                    && <FormFeedback style={{ display: 'block' }}>{errors.title}</FormFeedback>}
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className="col-4 col-form-label">Email Alias</label>
                <InputGroup className="col-8">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    required
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">@sse.rit.edu</span>
                  </div>
                  {touched.email
                    && errors.email
                    && <FormFeedback style={{ display: 'block' }}>{errors.email}</FormFeedback>}
                </InputGroup>
              </div>
              <div className="form-group row">
                <label htmlFor="committeeName" className="col-4 col-form-label">Committee</label>
                <div className="col-8">
                  <FormikSelectInput
                    name="committeeName"
                    id="committeeName"
                    field="committeeName"
                    input={{
                      onChange: setFieldValue,
                      onBlur: setFieldTouched,
                      value: values.committeeName,
                    }}
                    options={committees}
                    disabled={values.primaryOfficer}
                  />
                  {touched.committeeName
                    && errors.committeeName
                    && <FormFeedback style={{ display: 'block' }}>{errors.committeeName}</FormFeedback>}
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <label htmlFor="primaryOfficer" className="form-check-label">
                    <input
                      type="checkbox"
                      name="primaryOfficer"
                      id="primaryOfficer"
                      className="form-check-input"
                      onChange={(e) => {
                        if (e.target.checked) {
                          // Set to the 'General' committee
                          setFieldValue('committeeName', primaryOfficerCommitteeSelectOption);
                        } else {
                          // Reset the select input
                          setFieldValue('committeeName', null);
                        }
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                      checked={values.primaryOfficer}
                    />
                    Primary Officer
                  </label>
                  {touched.primaryOfficer
                    && errors.primaryOfficer
                    && <FormFeedback style={{ display: 'block' }}>{errors.primaryOfficer}</FormFeedback>}
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="startDate" className="col-4 col-form-label">Start Date</label>
                <div className="col-8">
                  {/* TODO: Update to use a cross-browser date picker */}
                  <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.startDate}
                    required
                  />
                  {touched.startDate
                    && errors.startDate
                    && <FormFeedback style={{ display: 'block' }}>{errors.startDate}</FormFeedback>}
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="endDate" className="col-4 col-form-label">End Date</label>
                <div className="col-8">
                  {/* TODO: Update to use a cross-browser date picker */}
                  <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.endDate}
                  />
                  {touched.endDate
                    && errors.endDate
                    && <FormFeedback style={{ display: 'block' }}>{errors.endDate}</FormFeedback>}
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="linkedinUrl" className="col-4 col-form-label">LinkedIn URL</label>
                <div className="col-8">
                  <input
                    type="text"
                    name="linkedinUrl"
                    id="linkedinUrl"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.linkedinUrl}
                  />
                  {touched.linkedinUrl
                    && errors.linkedinUrl
                    && <FormFeedback style={{ display: 'block' }}>{errors.linkedinUrl}</FormFeedback>}
                </div>
              </div>
            </fieldset>
          )}
          renderFooter={({
            isSubmitting,
          }) => ([ // TODO: Update to Fragment syntax in React 16
            <Button key="submit" type="submit" className="btn btn-sse" disabled={isSubmitting}>{updateOrCreate}</Button>,
            <Button key="close" className="btn btn-secondary" type="button" onClick={close}>Cancel</Button>,
          ])}
        />
      </Modal>
    );
  }
}

export default OfficerForm;
