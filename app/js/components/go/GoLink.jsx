import React from 'react';
import PropTypes from 'prop-types';

const GoLink = ({
  shortLink,
  longLink,
}) => (
  <tr key={shortLink}>
    <td>
      <a href={`/go/${shortLink}`}>{shortLink}</a>
    </td>
    <td>
      <a href={longLink} target="_blank" rel="noopener noreferrer">{longLink}</a>
    </td>
  </tr>
);

GoLink.propTypes = {
  shortLink: PropTypes.string.isRequired,
  longLink: PropTypes.string.isRequired,
};

export default GoLink;
