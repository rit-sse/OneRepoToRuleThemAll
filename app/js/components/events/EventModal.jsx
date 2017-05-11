import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, Form, reduxForm } from 'redux-form';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from 'components/general/Button';
import moment from 'moment';

class EventModal extends Component {
  static propTypes = {
    event: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      committeeName: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      description: PropTypes.string,
      location: PropTypes.string,
      image: PropTypes.string,
    }),
    handleSubmit: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    committees: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  static defaultProps = {
    event: null,
  }

  componentDidUpdate(prevProps) {
    const {
      isOpen,
      initialize,
      event,
    } = this.props;
    if (isOpen && !prevProps.isOpen) {
      initialize(event);
    }
  }

  submit = (values) => {
    const {
      event,
      create,
      update,
      close,
    } = this.props;

    const newEvent = {
      ...values,
      startDate: moment(values.startDate).toISOString(),
      endDate: moment(values.endDate).toISOString(),
    };

    close();

    if (event) update(event.id, newEvent);
    else create(newEvent);
  }

  render() {
    const {
      isOpen,
      handleSubmit,
      close,
      event,
      committees,
    } = this.props;

    const options = committees.map(committee => <option key={committee.name} value={committee.name}>{committee.name}</option>);
    const updateOrCreate = event ? 'Update' : 'Create';


    return (
      <Modal isOpen={isOpen} toggle={close}>
        <ModalHeader toggle={close}>{updateOrCreate}</ModalHeader>
        <Form onSubmit={handleSubmit(this.submit)}>
          <ModalBody>
            <div className="form-group row">
              <label htmlFor="name" className="col-3 col-form-label">Event Name</label>
              <div className="col-9">
                <Field className="form-control" id="name" name="name" component="input" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="startDate" className="col-3 col-form-label">Start Date</label>
              <div className="col-9">
                <Field
                  id="startDate"
                  name="startDate"
                  type="datetime-local"
                  className="form-control"
                  component="input"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="endDate" className="col-3 col-form-label">End Date</label>
              <div className="col-9">
                <Field
                  id="endDate"
                  name="endDate"
                  type="datetime-local"
                  className="form-control"
                  component="input"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="description" className="col-3 col-form-label">Description</label>
              <div className="col-9">
                <Field
                  rows="5"
                  id="description"
                  name="description"
                  className="form-control"
                  component="textarea"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="location" className="col-3 col-form-label">Location</label>
              <div className="col-9">
                <Field
                  id="location"
                  name="location"
                  className="form-control"
                  placeholder="location"
                  component="input"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="image" className="col-3 col-form-label">Image URL</label>
              <div className="col-9">
                <Field
                  id="image"
                  name="image"
                  className="form-control"
                  placeholder="Image URL"
                  component="input"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="committeeName" className="col-3 col-form-label">Comittee</label>
              <div className="col-9">
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
  form: 'event',
})(EventModal);
