import React, { Component, PropTypes } from 'react';
import { Field, Form, FormSection, reduxForm } from 'redux-form';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from 'components/general/Button';
import UserForm from 'containers/general/UserForm';

class AddMembershipModal extends Component {
  static propTypes = {
    committees: PropTypes.arrayOf(React.PropTypes.object).isRequired,
    getCommittees: PropTypes.func.isRequired,
    autofill: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCommittees();
  }

  submit = (values) => {
    const {
      close,
      create,
    } = this.props;

    const { user, ...membership } = values;

    const newMembership = {
      ...membership,
      userDce: user.dce,
    };

    close();

    create(user, newMembership);
  }

  render() {
    const {
      autofill,
      handleSubmit,
      committees,
      isOpen,
      close,
    } = this.props;

    const options = committees.map(committee => <option key={committee.name} value={committee.name}>{committee.name}</option>);

    return (
      <Modal isOpen={isOpen} toggle={close} style={{ maxWidth: '750px' }}>
        <Form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={close}>Add Memberships</ModalHeader>
          <ModalBody>
            <FormSection name="user">
              <UserForm autofill={autofill} />
            </FormSection>
            <fieldset className="form-group">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="startDate">Start Date</label>
                <div className="col-sm-10">
                  <Field type="datetime-local" className="form-control" id="startDate" name="startDate" component="input" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="endDate">End Date</label>
                <div className="col-sm-10">
                  <Field type="datetime-local" className="form-control" id="endDate" name="endDate" component="input" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="reason">Reason</label>
                <div className="col-sm-10">
                  <Field className="form-control" id="reason" name="reason" component="textarea" rows="2" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="committeeName" className="col-2 col-form-label">Comittee</label>
                <div className="col-10">
                  <Field
                    id="committeeName"
                    name="committeeName"
                    className="form-control"
                    component="select"
                  >
                    {options}
                  </Field>
                </div>
              </div>
            </fieldset>
          </ModalBody>
          <ModalFooter>
            <Button className="btn btn-sse" type="submit">Add</Button>
            <Button className="btn btn-secondary" type="button" onClick={close}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}

export default reduxForm({
  form: 'memberships',
})(AddMembershipModal);
