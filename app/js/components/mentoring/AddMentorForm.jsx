import React, { Component, PropTypes } from 'react';
import { Field, Form, FormSection, reduxForm } from 'redux-form';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from 'components/general/Button';
import UserForm from 'containers/general/UserForm';
import SelectInput from 'components/general/SelectInput';

class AddMentorForm extends Component {
  static propTypes = {
    mentor: PropTypes.shape({
      id: PropTypes.number,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        dce: PropTypes.string,
        image: PropTypes.string,
      }),
      specialties: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
      })),
    }),
    specialties: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })).isRequired,
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    autofill: PropTypes.func.isRequired,
  }

  static defaultProps = {
    mentor: {
      id: 0,
      startDate: '',
      endDate: '',
      user: {
        firstName: '',
        lastName: '',
        dce: '',
        image: '',
      },
      specialties: [],
    },
  };

  submit = (values) => {
    const {
      mentor,
      create,
      update,
    } = this.props;

    if (mentor) {
      return update(mentor.id, values);
    }
    return create(values);
  };

  render() {
    const {
      isOpen,
      close,
      mentor,
      handleSubmit,
      specialties,
      autofill,
    } = this.props;
    const updateOrCreate = mentor ? 'Update' : 'Create';

    return (
      <Modal isOpen={isOpen} toggle={close}>
        <ModalHeader toggle={close}>{updateOrCreate} Mentor</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit(this.submit)}>
            <FormSection name="user">
              <UserForm autofill={autofill} />
            </FormSection>
            <fieldset className="form-group">
              <div className="form-group row">
                <label htmlFor="startDate" className="col-sm-2 col-form-label">Start Date</label>
                <div className="col-sm-10">
                  <Field className="form-control" id="startDate" name="startDate" component="input" type="datetime-local" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="endDate" className="col-sm-2 col-form-label">End Date</label>
                <div className="col-sm-10">
                  <Field className="form-control" id="endDate" name="endDate" component="input" type="datetime-local" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="specialties" className="col-sm-2 col-form-label">Specialties</label>
                <div className="col-sm-10">
                  <Field id="specialties" name="specialties" component={SelectInput} multi options={specialties} />
                </div>
              </div>
            </fieldset>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn-sse" onClick={this.sumbit}>{updateOrCreate}</Button>
          <Button className="btn btn-secondary" onClick={close}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default reduxForm({
  form: 'mentor',
})(AddMentorForm);
