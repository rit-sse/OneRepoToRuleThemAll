import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, Form, FormSection, reduxForm } from 'redux-form';
import { Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupAddon } from 'reactstrap';
import Button from 'components/general/Button';
import UserForm from 'containers/general/UserForm';
import SelectInput from 'components/general/SelectInput';
import moment from 'moment';

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
      user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        dce: PropTypes.string,
        image: PropTypes.string,
      }),
    }),
    primaryOfficerValue: PropTypes.bool,
    committees: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })).isRequired,
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    autofill: PropTypes.func.isRequired,
    getCommittees: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
  };

  static defaultProps = {
    officer: null,
    primaryOfficerValue: false,
  };

  componentDidMount() {
    this.props.getCommittees();
  }

  componentDidUpdate(prevProps) {
    const {
      isOpen,
      initialize,
      officer,
    } = this.props;
    if (isOpen && !prevProps.isOpen) {
      initialize(officer);
    }
  }

  submit = (values) => {
    const {
      officer,
      create,
      update,
      close,
    } = this.props;

    const newOfficer = {
      ...values,
      startDate: moment(values.startDate).utc(),
      endDate: moment(values.endDate).utc(),
      committeeName: do { /* eslint-disable */
        if (values.primaryOfficer) {
          'General';
        } else if (values.committeeName) {
          values.committeeName.value;
        } else {
          undefined;
        } /* eslint-enable */
      },
    };
    newOfficer.userDce = newOfficer.user.dce;

    close();

    if (officer) {
      update(officer.id, newOfficer);
    } else {
      create(newOfficer);
    }
  }

  render() {
    const {
      isOpen,
      close,
      officer,
      handleSubmit,
      committees,
      autofill,
      primaryOfficerValue,
    } = this.props;

    const updateOrCreate = officer ? 'Update' : 'Create';

    return (
      <Modal isOpen={isOpen} toggle={close}>
        <Form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={close}>{updateOrCreate} Officer</ModalHeader>
          <ModalBody>
            <FormSection name="user">
              <UserForm autofill={autofill} />
            </FormSection>
            <fieldset className="form-group">
              <div className="form-group row">
                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                  <Field id="title" className="form-control" name="title" component="input" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Alias</label>
                <InputGroup className="col-sm-10">
                  <Field id="email" className="form-control" name="email" component="input" />
                  <InputGroupAddon>@sse.rit.edu</InputGroupAddon>
                </InputGroup>
              </div>
              <div className="form-group row">
                <label htmlFor="committeeName" className="col-sm-2 col-form-label">Committee</label>
                <div className="col-sm-10">
                  <Field id="committeeName" disabled={primaryOfficerValue} input={{ value: primaryOfficerValue ? 'General' : undefined }} name="committeeName" component={SelectInput} options={committees} />
                </div>
              </div>
              <div className="form-check">
                <label htmlFor="primaryOfficer" className="form-check-label">
                  <Field id="primaryOfficer" className="form-check-input" name="primaryOfficer" component="input" type="checkbox" />
                  Primary Officer
                </label>
              </div>
              <div className="form-group row">
                <label htmlFor="startDate" className="col-sm-2 col-form-label">Start Date</label>
                <div className="col-sm-10">
                  <Field id="startDate" className="form-control" name="startDate" component="input" type="date" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="endDate" className="col-sm-2 col-form-label">End Date</label>
                <div className="col-sm-10">
                  <Field id="endDate" className="form-control" name="endDate" component="input" type="date" />
                </div>
              </div>
            </fieldset>
          </ModalBody>
          <ModalFooter>
            <Button className="btn btn-sse" type="submit">{updateOrCreate}</Button>
            <Button className="btn btn-secondary" type="button" onClick={close}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}

export default reduxForm({
  form: 'officer',
})(OfficerForm);
