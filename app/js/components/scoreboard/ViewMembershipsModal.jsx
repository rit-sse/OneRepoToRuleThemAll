import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalFooter } from 'reactstrap';
import moment from 'moment';
import Button from 'components/general/Button';

const ViewMembershipsModal = ({
  close,
  isOpen,
  member,
}) => {
  const {
    name,
    memberships,
  } = member;

  return (
    <Modal isOpen={isOpen} toggle={close} style={{ maxWidth: '750px' }}>
      <ModalHeader toggle={close}>{name}</ModalHeader>
      <table className="table">
        <thead>
          <tr>
            <th>Date Earned</th>
            <th>End Date</th>
            <th>Committee</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {
            memberships.map(ship => (
              <tr key={ship}>
                <td>{moment(ship.startDate).format('MM/DD/YYYY')}</td>
                <td>{moment(ship.endDate).format('MM/DD/YYYY')}</td>
                <td>{ship.committeeName}</td>
                <td>{ship.reason}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <ModalFooter>
        <Button className="btn btn-secondary" onClick={close}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

ViewMembershipsModal.propTypes = {
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  member: PropTypes.shape({
    name: PropTypes.string,
    memberships: PropTypes.arrayOf(PropTypes.shape({
      reason: PropTypes.string,
      endDate: PropTypes.string,
      startDate: PropTypes.string,
      committeeName: PropTypes.string,
    })),
  }),
};

ViewMembershipsModal.defaultProps = {
  member: {
    name: '',
    memberships: [],
  },
};

export default ViewMembershipsModal;
