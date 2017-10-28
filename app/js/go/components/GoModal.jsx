import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, Form, reduxForm } from 'redux-form';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from 'general/components/Button';

class GoModal extends Component {
  static propTypes = {
    link: PropTypes.shape({
      longLink: PropTypes.string,
      shortLink: PropTypes.string,
    }),
    handleSubmit: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    checkLink: PropTypes.func.isRequired,
    shouldUpdate: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    link: null,
  }

  componentDidUpdate(prevProps) {
    const {
      link,
      isOpen,
      initialize,
    } = this.props;
    if (isOpen && !prevProps.isOpen) {
      initialize(link);
    }
  }

  submit = (values) => {
    const {
      link,
      create,
      update,
      close,
      shouldUpdate,
    } = this.props;

    close();

    if (link) update(link.shortLink, values);
    if (shouldUpdate) update(values.shortLink, values);
    else create(values);

    this.setState({
      update: false,
    });
  }

  render() {
    const {
      link,
      close,
      isOpen,
      checkLink,
      handleSubmit,
      shouldUpdate,
    } = this.props;

    const updateOrCreate = link ? 'Update' : 'Create';

    return (
      <Modal isOpen={isOpen} toggle={close}>
        <ModalHeader toggle={close}>{shouldUpdate ? 'Override' : updateOrCreate} Link</ModalHeader>
        <Form onSubmit={handleSubmit(this.submit)}>
          <ModalBody>
            <div className="form-group row">
              <label className="col-3 col-form-label" htmlFor="shortLink">Short Link</label>
              <div className="col-9">
                <Field className="form-control" onBlur={e => checkLink(e.target.value)} disabled={!!link} id="shortLink" name="shortLink" component="input" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-3 col-form-label" htmlFor="longLink">Long Link</label>
              <div className="col-9">
                <Field className="form-control" id="longLink" name="longLink" component="input" />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button className={`btn ${shouldUpdate ? 'btn-warning' : 'btn-sse'}`} type="submit">{shouldUpdate ? 'Override' : updateOrCreate}</Button>
            <Button className="btn btn-secondary" type="button" onClick={close}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}

export default reduxForm({
  form: 'golink',
})(GoModal);
