import React from 'react';

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
  shortLink: React.PropTypes.string.isRequired,
  longLink: React.PropTypes.string.isRequired,
};

export default GoLink;
