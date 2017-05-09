import React from 'react';
import PropTypes from 'prop-types';

const GoLink = ({
  shortLink,
  longLink,
  editItem,
  deleteItem,
}) => (
  <li key={shortLink} className="list-group-item go-item">
    <div className="head">
      <p className="short-link">
        ShortLink: <a href={`/go/${shortLink}`}>{shortLink}</a>
      </p>
      <div className="actions">
        <button className="btn btn-small btn-info" onClick={editItem}>Edit</button>
        <button className="btn btn-small btn-danger" onClick={deleteItem}>Delete</button>
      </div>
    </div>
    <p className="long-link">
      LongLink: <a href={longLink} target="_blank" rel="noopener noreferrer">{longLink}</a>
    </p>
  </li>
);

GoLink.propTypes = {
  shortLink: PropTypes.string.isRequired,
  longLink: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default GoLink;
