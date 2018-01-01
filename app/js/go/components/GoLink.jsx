import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Actions = styled.div`
  /* Position the Action Buttons on the right side of the container */
  position: absolute;
  right: 0;
  top: 0;
`;

const ActionButton = styled.button`
  display: block; /* Stack the buttons on top of each other */
  margin: 4px; /* Based on the height of the container, this spacing looks alright */
  width: 75px; /* So that the buttons have the same width */
`;

const Link = styled.p``;

const LongLink = Link.extend`
  margin-bottom: 0; /* Remove default margin */
  word-break: break-all;
`;

const GoLink = ({
  shortLink,
  longLink,
  editItem,
  deleteItem,
}) => (
  <li key={shortLink} className="list-group-item">
    <Link>Short Link: <a href={`/go/${shortLink}`}>{shortLink}</a></Link>
    <LongLink>Long Link: <a href={longLink} target="_blank" rel="noopener noreferrer">{longLink}</a></LongLink>
    <Actions>
      <ActionButton className="btn btn-small btn-primary" onClick={editItem}>Edit</ActionButton>
      <ActionButton className="btn btn-small btn-danger" onClick={deleteItem}>Delete</ActionButton>
    </Actions>
  </li>
);

GoLink.propTypes = {
  shortLink: PropTypes.string.isRequired,
  longLink: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default GoLink;
