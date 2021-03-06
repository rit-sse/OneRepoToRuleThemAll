import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormFeedback } from 'reactstrap';
import { Formik } from 'formik';
import FormikSwitch from 'common/components/FormikSwitch';
import * as yup from 'yup';

import Button from 'common/components/Button';

class GoModal extends Component {
  static propTypes = {
    link: PropTypes.shape({
      longLink: PropTypes.string,
      shortLink: PropTypes.string,
      public: PropTypes.bool,
      description: PropTypes.string,
    }),
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    checkLink: PropTypes.func.isRequired,
    shouldOverride: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    link: {},
  }

  render() {
    const {
      link,
      create,
      update,
      close,
      isOpen,
      checkLink,
      shouldOverride,
    } = this.props;

    // New Go Link = Create
    // Edit Go Link = Update
    // Create New Go Link w/ Same Short Link as Existing = Override
    const updateOrCreate = link.shortLink ? 'Update' : 'Create';

    return (
      <Modal isOpen={isOpen} toggle={close}>
        <ModalHeader toggle={close}>{shouldOverride ? 'Override' : updateOrCreate} Link</ModalHeader>
        <Formik
          initialValues={{
            shortLink: link.shortLink || '',
            longLink: link.longLink || '',
            public: link.public || false,
            description: link.description || '',
          }}
          validationSchema={() => yup.object()
            .shape({
              shortLink: yup.string().required('Required'),
              longLink: yup.string().required('Required').url('Must be a valid URL'),
              description: yup.string(),
              public: yup.boolean().required('Required'),
            })
          }
          onSubmit={(
            values
          ) => {
            const actualValues = { ...values, public: values.public };
            close();

            if (link.shortLink) {
              // We're updating a Go link
              update(link.shortLink, actualValues);
            } else if (shouldOverride) {
              // We're creating a new Go link w/ the same short link as an existing Go link
              update(values.shortLink, actualValues);
            } else {
              // We're creating a new Go link
              create(actualValues);
            }
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <ModalBody>
                <div className="form-group row">
                  <label className="col-3 col-form-label" htmlFor="shortLink">Short Link</label>
                  <div className="col-9">
                    <input
                      type="text"
                      name="shortLink"
                      id="shortLink"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={(e) => {
                        if (values.shortLink) {
                          // Check to see if a Go link with that short link already exists
                          checkLink(values.shortLink);
                        }
                        handleBlur(e);
                      }}
                      value={values.shortLink}
                      disabled={!!link.shortLink} // Disable if we're editing an existing link
                      required
                    />
                    {touched.shortLink
                      && errors.shortLink
                      && <FormFeedback style={{ display: 'block' }}>{errors.shortLink}</FormFeedback>}
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-3 col-form-label" htmlFor="longLink">Long Link</label>
                  <div className="col-9">
                    <input
                      type="text"
                      name="longLink"
                      id="longLink"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.longLink}
                      required
                    />
                    {touched.longLink
                      && errors.longLink
                      && <FormFeedback style={{ display: 'block' }}>{errors.longLink}</FormFeedback>}
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-3 col-form label" htmlFor="description">Description</label>
                  <div className="col-9">
                    <input
                      type="text"
                      name="description"
                      id="description"
                      className="form-control"
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
                  <label className="col-3 col-form label" htmlFor="public">Public Link</label>
                  <div className="col-9">
                    <FormikSwitch
                      name="public"
                      id="public"
                      onChange={handleChange}
                      defaultChecked={values.public}
                      label="checked"
                      required
                    />
                    {touched.public
                      && errors.public
                      && <FormFeedback style={{ display: 'block' }}>{errors.public}</FormFeedback>}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  className={`btn ${shouldOverride ? 'btn-warning' : 'btn-sse'}`}
                  disabled={isSubmitting}
                >
                  {shouldOverride ? 'Override' : updateOrCreate}
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

export default GoModal;
