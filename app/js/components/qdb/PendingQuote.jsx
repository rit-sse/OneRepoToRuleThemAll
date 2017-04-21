import React from 'react';
import PropTypes from 'prop-types';
import Tags from 'components/qdb/Tags';

import 'scss/pane.scss';

const PendingQuote = ({
  id,
  body,
  description,
  tags,
  loggedIn,
  editItem,
  deleteItem,
  approveQuote,
  filterTag,
}) => (
  <div className="pane quote">
    <div className="heading">
      <h4 className="title">{ body }</h4>
      { loggedIn ? (
        <div className="actions">
          <button className="btn btn-small btn-success" onClick={() => approveQuote(id)}><i className="fa fa-rocket" aria-hidden="true" /> Approve</button>
          <button className="btn btn-small btn-info" onClick={editItem}><i className="fa fa-pencil" aria-hidden="true" /> Edit</button>
          <button className="btn btn-small btn-danger" onClick={deleteItem}><i className="fa fa-trash-o" aria-hidden="true" /> Delete</button>
        </div>
      ) : null }
    </div>
    <p>{description}</p>
    <Tags tags={tags} link="approval" filterTag={filterTag} />
  </div>
);

PendingQuote.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  loggedIn: PropTypes.bool.isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  approveQuote: PropTypes.func.isRequired,
  filterTag: PropTypes.func.isRequired,
};

PendingQuote.defaultProps = {
  description: '',
};

export default PendingQuote;
