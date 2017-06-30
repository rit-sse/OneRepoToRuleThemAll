import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from 'components/general/Button';

const DeleteOfficerModal = ({
  id,
  isOpen,
  close,
  deleteOfficer,
}) => (
  <Modal isOpen={isOpen} toggle={close}>
    <ModalHeader>Are you sure you what to delete this officer?</ModalHeader>
    <ModalBody>Deleting an officer is a permanent action.</ModalBody>
    <ModalFooter>
      <Button className="btn btn-danger" onClick={() => deleteOfficer(id)}>Delete</Button>
      <Button className="btn btn-secondary" onClick={close}>Cancel</Button>
    </ModalFooter>
  </Modal>
);

DeleteOfficerModal.propTypes = {
  id: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  deleteOfficer: PropTypes.func.isRequired,
};

DeleteOfficerModal.defaultProps = {
  id: 0,
};

export default DeleteOfficerModal;
