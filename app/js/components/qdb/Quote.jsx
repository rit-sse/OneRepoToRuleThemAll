import React from 'react';
import PropTypes from 'prop-types';
import Tags from 'components/qdb/Tags';

import 'scss/pane.scss';

const Quote = ({
  body,
  description,
  tags,
  loggedIn,
  editItem,
  deleteItem,
  filterTag,
}) => (
  <div className="pane quote">
    <div className="heading">
      <h4 className="title">{body}</h4>
      { loggedIn ? (
        <div className="actions">
          <button className="btn btn-small btn-info" onClick={editItem}><i className="fa fa-pencil" aria-hidden="true" /> Edit</button>
          <button className="btn btn-small btn-danger" onClick={deleteItem}><i className="fa fa-trash-o" aria-hidden="true" /> Delete</button>
        </div>
      ) : null }
    </div>
    <p>{description}</p>
    <Tags approved tags={tags} link="quotes" filterTag={filterTag} />
  </div>
);

Quote.propTypes = {
  body: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  loggedIn: PropTypes.bool.isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  filterTag: PropTypes.func.isRequired,
};

Quote.defaultProps = {
  description: '',
};

export default Quote;
