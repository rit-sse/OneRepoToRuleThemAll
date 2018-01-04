import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormFeedback } from 'reactstrap';
import moment from 'moment';
import { Formik } from 'formik';

import Button from 'common/components/Button';
import FormikDatetime from 'common/components/FormikDatetime';
import yup from 'utils/yup';

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
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    committees: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  static defaultProps = {
    event: {},
  }

  render() {
    const {
      isOpen,
      close,
      event,
      committees,
      create,
      update,
    } = this.props;

    const committeeNames = committees.map(committee => committee.name);
    const updateOrCreate = event.id ? 'Update' : 'Create';

    return (
      <Modal isOpen={isOpen} toggle={close}>
        <ModalHeader toggle={close}>{updateOrCreate}</ModalHeader>
        <Formik
          initialValues={{
            name: event.name || '',
            startDate: event.startDate ? moment(event.startDate) : '',
            endDate: event.endDate ? moment(event.endDate) : '',
            description: event.description || '',
            location: event.location || '',
            image: event.image || '',
            committeeName: event.committeeName || '',
          }}
          validationSchema={() => yup.object()
            .shape({
              name: yup.string()
                .required('Required')
                .max(25, 'Event names can have a maximum of 25 characters'),
              startDate: yup.date()
                .required('Required')
                .isFuture('Start Date must be in the future'),
              endDate: yup.date()
                .required('Required')
                .isFuture('End Date must be in the future')
                .isAfter(yup.ref('startDate'), 'End Date must come after Start Date'),
              description: yup.string(),
              location: yup.string().required('Required'),
              image: yup.string().url('Must be a valid URL'),
              committeeName: yup.string().required('Required').oneOf(committeeNames),
            })
          }
          onSubmit={(
            values
          ) => {
            const newEvent = {
              ...values,
              startDate: moment(values.startDate).toISOString(),
              endDate: moment(values.endDate).toISOString(),
              image: values.image || null, // If an empty string (''), the API expects 'null'
            };

            close();

            if (event.id) {
              update(event.id, newEvent);
            } else {
              create(newEvent);
            }
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <ModalBody>
                <div className="form-group row">
                  <label htmlFor="name" className="col-3 col-form-label">Event Name</label>
                  <div className="col-9">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      required
                      maxLength={25}
                    />
                    {touched.name
                      && errors.name
                      && <FormFeedback style={{ display: 'block' }}>{errors.name}</FormFeedback>}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="startDate" className="col-3 col-form-label">Start Date</label>
                  <div className="col-9">
                    <FormikDatetime
                      inputProps={{
                        name: 'startDate',
                        id: 'startDate',
                        required: true,
                      }}
                      field="startDate"
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      value={values.startDate}
                    />
                    {touched.startDate
                      && errors.startDate
                      && <FormFeedback style={{ display: 'block' }}>{errors.startDate}</FormFeedback>}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="endDate" className="col-3 col-form-label">End Date</label>
                  <div className="col-9">
                    <FormikDatetime
                      inputProps={{
                        name: 'endDate',
                        id: 'endDate',
                        required: true,
                      }}
                      field="endDate"
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      value={values.endDate}
                    />
                    {touched.endDate
                      && errors.endDate
                      && <FormFeedback style={{ display: 'block' }}>{errors.endDate}</FormFeedback>}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="description" className="col-3 col-form-label">Description</label>
                  <div className="col-9">
                    <textarea
                      name="description"
                      id="description"
                      className="form-control"
                      rows="5"
                    />
                    {touched.description
                      && errors.description
                      && <FormFeedback style={{ display: 'block' }}>{errors.description}</FormFeedback>}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="location" className="col-3 col-form-label">Location</label>
                  <div className="col-9">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.location}
                      placeholder="GOL-1670"
                      required
                    />
                    {touched.location
                      && errors.location
                      && <FormFeedback style={{ display: 'block' }}>{errors.location}</FormFeedback>}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="image" className="col-3 col-form-label">Image</label>
                  <div className="col-9">
                    <input
                      type="url"
                      name="image"
                      id="image"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.image}
                      placeholder="https://example.com/image.png"
                    />
                    {touched.image
                      && errors.image
                      && <FormFeedback style={{ display: 'block' }}>{errors.image}</FormFeedback>}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="committeeName" className="col-3 col-form-label">Committee</label>
                  <div className="col-9">
                    <select
                      type="text"
                      name="committeeName"
                      id="committeeName"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.committeeName}
                      required
                    >
                      {committeeNames.map(name => <option key={name} value={name}>{name}</option>)}
                    </select>
                    {touched.committeeName
                      && errors.committeeName
                      && <FormFeedback style={{ display: 'block' }}>{errors.committeeName}</FormFeedback>}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  className="btn btn-sse"
                  disabled={isSubmitting}
                >
                  {updateOrCreate}
                </Button>
                <Button className="btn btn-secondary" type="button" onClick={close}>Cancel</Button>
              </ModalFooter>
            </form>
          )}
        />
      </Modal>
    );
  }
}

export default EventModal;
