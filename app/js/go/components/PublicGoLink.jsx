import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Actions = styled.div`
  display: inline-block; /* Side-by-side w/ Links */
  text-align: center;
  width: 100%;

  @media (min-width: 992px) {
    width: 10%; /* 100% - 85% - 5% */
  }
`;

const ActionButton = styled.button`
  margin: 5px 10px;
  min-width: 40%; /* So that the buttons have the same width */

  @media (min-width: 992px) {
    display: block; /* Stack the buttons on top of each other */
    margin: 5px 0;
    min-width: 75px; /* So that the buttons have the same width */
  }
`;

const Links = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    display: inline-block; /* Side-by-side w/ Actions */
    margin-right: 5%;
    width: 85%; /* Move Actions to the right */
  }
`;

const Link = styled.p``;

const LongLink = Link.extend`
  margin-bottom: 0; /* Remove default margin */
  word-break: break-all;
`;

const GoLink = ({
  shortLink,
  longLink,
  description,
}) => (
  <li key={shortLink} className="list-group-item">
    <Links>
      <Link>Short Link: <a href={`/go/${shortLink}`}>{shortLink}</a></Link>
      <LongLink>Long Link: <a href={longLink} target="_blank" rel="noopener noreferrer">{longLink}</a></LongLink>
      {description && (<p>Description: {description}</p>)}
    </Links>
  </li>
);

GoLink.propTypes = {
  shortLink: PropTypes.string.isRequired,
  longLink: PropTypes.string.isRequired,
  description: PropTypes.string,
};

GoLink.defaultProps = {
  description: '',
};

export default GoLink;
