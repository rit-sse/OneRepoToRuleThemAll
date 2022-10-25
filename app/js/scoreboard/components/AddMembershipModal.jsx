import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, FormFeedback } from 'reactstrap';
import moment from 'moment';

import yup from 'utils/yup';
import UserForm from 'common/containers/UserForm';
import Button from 'common/components/Button';

class AddMembershipModal extends Component {
  static propTypes = {
    committees: PropTypes.arrayOf(PropTypes.object).isRequired,
    getCommittees: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    initialCommitteeName: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.props.getCommittees();
  }

  render() {
    const {
      committees,
      isOpen,
      close,
      create,
      initialCommitteeName,
    } = this.props;

    const committeeNames = committees.map(committee => committee.name);
    const dayFormat = 'YYYY-MM-DD';
    // Memberships carry over to the first withdrawal date of the following semester
    // Amend these dates as necessary
    const springWithdrawalDate = moment({ months: 0, day: 22 }).add({ years: 1 });
    const fallWithdrawalDate = moment({ months: 8, day: 4 });
    const endDate = moment().month() < fallWithdrawalDate.month() ? fallWithdrawalDate : springWithdrawalDate;

    return (
      <Modal isOpen={isOpen} toggle={close}>
        <ModalHeader toggle={close}>Add Memberships</ModalHeader>
        <UserForm
          initialValues={{
            startDate: moment().format(dayFormat),
            endDate: endDate.format(dayFormat),
            reason: '',
            committeeName: initialCommitteeName,
          }}
          validationSchema={yup.object()
            .shape({
              startDate: yup.date()
                .required('Required'),
              endDate: yup.date()
                .required('Required')
                .isFuture('End Date must be in the future')
                .isAfter(yup.ref('startDate'), 'End Date must come after Start Date'),
              reason: yup.string().required('Required'),
              committeeName: yup.string().required('Required').oneOf(committeeNames),
            })}
          onSubmit={(
            values
          ) => {
            const user = {
              firstName: values.firstName,
              lastName: values.lastName,
              dce: values.dce,
              image: values.image,
            };

            const newMembership = {
              startDate: moment(values.startDate).toISOString(),
              endDate: moment(values.endDate).toISOString(),
              reason: values.reason,
              committeeName: values.committeeName,
              userDce: values.dce, // Helps in setting up the relation between User and Membership
            };

            close();

            create(user, newMembership);
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
          }) => (
            <fieldset className="form-group">
              <div className="form-group row">
                <label htmlFor="startDate" className="col-3 col-form-label">Start Date</label>
                <div className="col-9">
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
                <label htmlFor="endDate" className="col-3 col-form-label">End Date</label>
                <div className="col-9">
                  {/* TODO: Update to use a cross-browser date picker */}
                  <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.endDate}
                    required
                  />
                  {touched.endDate
                    && errors.endDate
                    && <FormFeedback style={{ display: 'block' }}>{errors.endDate}</FormFeedback>}
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="reason" className="col-3 col-form-label">Reason</label>
                <div className="col-9">
                  <textarea
                    name="reason"
                    id="reason"
                    className="form-control"
                    rows="2"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.reason}
                    required
                  />
                  {touched.reason
                    && errors.reason
                    && <FormFeedback style={{ display: 'block' }}>{errors.reason}</FormFeedback>}
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="committeeName" className="col-3 col-form-label">Committee</label>
                <div className="col-9">
                  <select
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
            </fieldset>
          )}
          renderFooter={({
            isSubmitting,
          }) => ([ // TODO: Update to Fragment syntax in React 16
            <Button key="submit" className="btn btn-sse" type="submit" disabled={isSubmitting}>Add</Button>,
            <Button key="close" className="btn btn-secondary" type="button" onClick={close}>Cancel</Button>,
          ])}
        />
      </Modal>
    );
  }
}

export default AddMembershipModal;
