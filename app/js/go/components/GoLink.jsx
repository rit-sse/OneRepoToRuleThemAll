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
  goDescription,
  publicGO,
  editItem,
  deleteItem,
  officer,
}) => (
  <div>
    {officer==='true'?
    <li key={shortLink} className="list-group-item">
      <Links>
        <Link>Short Link: <a href={`/go/${shortLink}`}>{shortLink}</a></Link>
        <LongLink>Long Link: <a href={longLink} target="_blank" rel="noopener noreferrer">{longLink}</a></LongLink>
        <p style={{marginTop:'1rem'}}>Description: {goDescription}</p>
        <p>Public: {publicGO}</p>
      </Links>
      <Actions>
        <ActionButton className="btn btn-small btn-primary" onClick={editItem}>Edit</ActionButton>
        <ActionButton className="btn btn-small btn-danger" onClick={deleteItem}>Delete</ActionButton>
      </Actions>
    </li>
    :
    <div>
      {publicGO==='true'?
      <li key={shortLink} className="list-group-item">
        <Links>
          <Link>Short Link: <a href={`/go/${shortLink}`}>{shortLink}</a></Link>
          <p style={{marginTop:'1rem'}}>Description: {goDescription}</p>
        </Links>
      </li>
      :
      null
      }
    </div>
    }
  </div>
);

GoLink.propTypes = {
  shortLink: PropTypes.string.isRequired,
  longLink: PropTypes.string.isRequired,
  goDescription: PropTypes.string.isRequired,
  publicGO: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  officer: PropTypes.string.isRequired,
};

export default GoLink;
