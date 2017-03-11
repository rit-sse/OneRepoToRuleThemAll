import React, { Component, PropTypes } from 'react';
import { Field, Form, FormSection, reduxForm } from 'redux-form';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from 'components/general/Button';
import UserForm from 'containers/general/UserForm';
import SelectInput from 'components/general/SelectInput';
import moment from 'moment';

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
    getSpecialties: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
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

  componentDidMount() {
    this.props.getSpecialties();
  }

  componentDidUpdate(prevProps) {
    const {
      isOpen,
      initialize,
      mentor,
    } = this.props;
    if (isOpen && !prevProps.isOpen) {
      initialize(mentor);
    }
  }

  submit = (values) => {
    const {
      mentor,
      create,
      update,
      close,
    } = this.props;

    const specialties = values.specialties || [];
    const newMentor = {
      ...values,
      startDate: moment(values.startDate).utc(),
      endDate: moment(values.endDate).utc(),
      specialties: specialties.map(specialty => specialty.value),
    };
    newMentor.userDce = newMentor.user.dce;

    close();
    if (mentor) {
      return update(mentor.id, newMentor);
    }
    return create(newMentor);
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
        <Form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={close}>{updateOrCreate} Mentor</ModalHeader>
          <ModalBody>
            <FormSection name="user">
              <UserForm autofill={autofill} />
            </FormSection>
            <fieldset className="form-group">
              <div className="form-group row">
                <label htmlFor="startDate" className="col-sm-2 col-form-label">Start Date</label>
                <div className="col-sm-10">
                  <Field className="form-control" id="startDate" name="startDate" component="input" type="date" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="endDate" className="col-sm-2 col-form-label">End Date</label>
                <div className="col-sm-10">
                  <Field className="form-control" id="endDate" name="endDate" component="input" type="date" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="specialties" className="col-sm-2 col-form-label">Specialties</label>
                <div className="col-sm-10">
                  <Field id="specialties" name="specialties" component={SelectInput} multi options={specialties} />
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
  form: 'mentor',
})(AddMentorForm);
