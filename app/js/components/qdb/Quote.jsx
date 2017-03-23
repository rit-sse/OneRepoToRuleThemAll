import React, { PropTypes } from 'react';

import 'scss/pane.scss';

const Quote = ({
  id,
  body,
  description,
  tags,
  loggedIn,
  editItem,
  deleteItem,
}) => (
  <div className="pane quote">
    <div className="heading">
      <h4 className="title">{id}</h4>
      { loggedIn ? (
        <div className="actions">
          <button className="btn btn-small btn-info" onClick={editItem}><i className="fa fa-pencil" aria-hidden="true" /> Edit</button>
          <button className="btn btn-small btn-danger" onClick={deleteItem}><i className="fa fa-trash-o" aria-hidden="true" /> Delete</button>
        </div>
      ) : null }
    </div>
    <p>{body}</p>
    <p>{description}</p>
    <div>{tags}</div>
  </div>
);

Quote.propTypes = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  loggedIn: PropTypes.bool.isRequired,
  editItem: React.PropTypes.func.isRequired,
  deleteItem: React.PropTypes.func.isRequired,
};

Quote.defaultProps = {
  description: '',
};

export default Quote;
