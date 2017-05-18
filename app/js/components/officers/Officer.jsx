import React from 'react';
import PropTypes from 'prop-types';
import { gravatar } from 'utils/images';
import 'scss/officers/officer.scss';

const Officer = ({
  title,
  user,
  editItem,
  email,
  deleteItem,
  showActions,
}) => {
  const { firstName, lastName, image, dce } = user || {};
  const emailAlias = `${email}@sse.rit.edu`;
  return (
    <div className="officer-box col-sm-6 col-lg-4 pb-3">
      <div className="media">
        <img className="mr-3" src={gravatar(dce, image)} alt="Officer" height={80} />
        <div className="d-flex align-self-center flex-column media-body">
          <h5 className="mb-0">{title}</h5>
          <p className="m-0">
            {firstName} {lastName}
          </p>
          <p className="m-0">
            <a href={`mailto:${emailAlias}`}>
              {emailAlias}
            </a>
          </p>
        </div>
        { showActions && (
          <div className="actions">
            <button className="btn btn-small btn-info" onClick={editItem}>
              <i className="fa fa-pencil" aria-hidden="true" />
            </button>
            <button className="btn btn-small btn-danger" onClick={deleteItem}>
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Officer.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastname: PropTypes.string,
    image: PropTypes.string,
    dce: PropTypes.string,
  }).isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

Officer.defaultProps = {
  showActions: false,
};

export default Officer;
