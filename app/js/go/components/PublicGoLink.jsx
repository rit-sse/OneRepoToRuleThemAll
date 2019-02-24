import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Links = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    display: inline-block; /* Side-by-side w/ Actions */
    margin-right: 5%;
    width: 85%; /* Move Actions to the right */
  }
`;

const Link = styled.p``;

const GoLink = ({
  shortLink,
  description,
}) => (
  <li key={shortLink} className="list-group-item">
    <Links>
      <Link>Short Link: <a href={`/go/${shortLink}`}>{shortLink}</a></Link>
      {description && (<p style={{ marginTop: '1rem' }}>Description: {description}</p>)}
    </Links>
  </li>
);

GoLink.propTypes = {
  shortLink: PropTypes.string.isRequired,
  description: PropTypes.string,
};

GoLink.defaultProps = {
  description: '',
};

export default GoLink;
