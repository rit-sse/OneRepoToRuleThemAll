import React, { Component, PropTypes } from 'react';
import Button from 'components/general/Button';
import { Field, Form, reduxForm } from 'redux-form';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class QDBModal extends Component {
  static propTypes = {
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    initialize: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    quote: PropTypes.shape({
      id: PropTypes.number,
      body: PropTypes.string,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    }),
  };

  static defaultProps = {
    quote: {
      id: 0,
      body: '',
      description: '',
      tags: [],
    },
  };

  componentDidUpdate(prevProps) {
    const {
      isOpen,
      initialize,
      quote,
    } = this.props;
    if (isOpen && !prevProps.isOpen) {
      initialize(quote);
    }
  }


  submit = (values) => {
    const {
      quote,
      create,
      update,
      close,
    } = this.props;

    close();

    if (quote) {
      update(quote.id, values);
    } else {
      create(values);
    }
  };

  render() {
    const {
      isOpen,
      handleSubmit,
      close,
      quote,
    } = this.props;

    const updateOrCreate = quote ? 'Update' : 'Create';

    return (
      <Modal isOpen={isOpen} toggle={close}>
        <Form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={close}>{updateOrCreate} Quote</ModalHeader>
          <ModalBody>
            <fieldset className="form-group">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="body">Body</label>
                <div className="col-sm-10">
                  <Field ref={(c) => { this.body = c; }} className="form-control" id="body" name="body" component="input" type="text" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="description">Description</label>
                <div className="col-sm-10">
                  <Field ref={(c) => { this.description = c; }} className="form-control" id="description" name="description" component="input" type="text" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="tags">Tags</label>
                <div className="col-sm-10">
                  <Field ref={(c) => { this.tags = c; }} className="form-control" id="tags" name="tags" component="input" type="text" />
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
  form: 'quote',
})(QDBModal);

