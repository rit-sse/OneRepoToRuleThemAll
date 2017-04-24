import React from 'react';
import PropTypes from 'prop-types';

const GoLink = ({
  shortLink,
  longLink,
  editItem,
  deleteItem,
}) => (
  <tr key={shortLink}>
    <td><a href={`/go/${shortLink}`}>{shortLink}</a></td>
    <td><a href={longLink} target="_blank" rel="noopener noreferrer">{longLink}</a></td>
    <td className="btn-group">
      <button className="btn btn-info" onClick={editItem}>Edit</button>
      <button className="btn btn-danger" onClick={deleteItem}>Delete</button>
    </td>
  </tr>
);

GoLink.propTypes = {
  shortLink: PropTypes.string.isRequired,
  longLink: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default GoLink;
