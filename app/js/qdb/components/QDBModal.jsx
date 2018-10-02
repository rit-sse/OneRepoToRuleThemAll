import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormFeedback } from 'reactstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikSelectInput from 'common/components/FormikSelectInput';
import Button from 'common/components/Button';

class QDBModal extends Component {
  static propTypes = {
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    loadTags: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })).isRequired,
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
    quote: {},
  };

  componentDidMount() {
    this.props.loadTags();
  }

  render() {
    const {
      isOpen,
      close,
      quote,
      tags,
      create,
      update,
    } = this.props;

    const updateOrCreate = quote.id ? 'Update' : 'Create';

    return (
      <Modal isOpen={isOpen} toggle={close}>
        <ModalHeader toggle={close}>{updateOrCreate} Quote</ModalHeader>
        <Formik
          initialValues={{
            body: quote.body || '',
            description: quote.description || '',
            tags: quote.tags || [], // react-select uses '[]' to represent when the value is cleared on a multi select
          }}
          validationSchema={() => yup.object()
            .shape({
              body: yup.string().required('Required'),
              description: yup.string(),
              tags: yup.array()
                .of(yup.object()
                  .shape({
                    label: yup.mixed(),
                    value: yup.mixed(),
                  })),
            })}
          onSubmit={(
            values
          ) => {
            const newQuote = {
              ...values,
              tags: values.tags.map(tag => tag.value),
            };

            close();

            if (quote.id) {
              update(quote.id, newQuote);
            } else {
              create(newQuote);
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
                <fieldset className="form-group">
                  <div className="form-group row">
                    <label htmlFor="body" className="col-3 col-form-label">Body</label>
                    <div className="col-9">
                      <textarea
                        name="body"
                        id="body"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.body}
                        required
                      />
                      {touched.body
                        && errors.body
                        && <FormFeedback style={{ display: 'block' }}>{errors.body}</FormFeedback>}
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                      />
                      {touched.description
                        && errors.description
                        && <FormFeedback style={{ display: 'block' }}>{errors.description}</FormFeedback>}
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="tags" className="col-3 col-form-label">Tags</label>
                    <div className="col-9">
                      <FormikSelectInput
                        name="tags"
                        id="tags"
                        field="tags"
                        input={{
                          onChange: setFieldValue,
                          onBlur: setFieldTouched,
                          value: values.tags,
                        }}
                        options={tags}
                        multi
                      />
                      {touched.tags
                        && errors.tags
                        && <FormFeedback style={{ display: 'block' }}>{errors.tags}</FormFeedback>}
                    </div>
                  </div>
                </fieldset>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" className="btn btn-sse" disabled={isSubmitting}>{updateOrCreate}</Button>
                <Button className="btn btn-secondary" type="button" onClick={close}>Cancel</Button>
              </ModalFooter>
            </form>
          )}
        />
      </Modal>
    );
  }
}

export default QDBModal;
