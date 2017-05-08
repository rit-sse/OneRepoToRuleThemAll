import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/general/Button';
import { Field, Form, reduxForm } from 'redux-form';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SelectInput from 'components/general/SelectInput';

class QDBModal extends Component {
  static propTypes = {
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    initialize: PropTypes.func.isRequired,
    loadTags: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })),
    quote: PropTypes.shape({
      id: PropTypes.number,
      body: PropTypes.string,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
      })),
    }),
  };

  static defaultProps = {
    quote: {
      id: 0,
      body: '',
      description: '',
      tags: [],
    },
    tags: [],
  };

  componentDidMount() {
    this.props.loadTags();
  }

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

    const newQuote = {
      ...values,
      tags: values.tags.map(tag => tag.value),
    };

    close();

    if (quote) update(quote.id, newQuote);
    else create(newQuote);
  };

  render() {
    const {
      isOpen,
      handleSubmit,
      close,
      quote,
      tags,
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
                  <Field className="form-control" id="body" name="body" component="input" type="text" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="description">Description</label>
                <div className="col-sm-10">
                  <Field className="form-control" id="description" name="description" component="textarea" type="text" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="tags">Tags</label>
                <div className="col-sm-10">
                  <Field id="tags" name="tags" multi options={tags} component={SelectInput} />
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

