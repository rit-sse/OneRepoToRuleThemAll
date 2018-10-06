import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import emoji from 'img/emoji.png';

const Flex = styled.div`
  display: flex;
  width: 100%;
`;

const Box = styled.div`
  align-items: center;
  height: 70vh;
  justify-content: center;
  margin-top: 10vh;
  text-align: center;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 146px;
  font-weight: 700;
`;

const Emoji = styled.span`
  background-image: url(${emoji});
  background-size: cover;
  display: inline-block;
  height: 120px;
  transform: scale(1.4);
  width: 120px;
  z-index: -1;
`;

const SubHeading = styled.h2`
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
`;

const P = styled.p`
  color: #787878;
  margin-bottom: 25px;
`;

const ActionLink = styled(Link)`
  background-color: #1E5A8D;
  border-radius: 40px;
  color: white;
  padding: 12px 30px;
  transition: 0.2s all;
  text-decoration: none;

  &:hover {
    color: white;
    opacity: 0.8;
    text-decoration: none;
  }
`;

const NotFound = () => (
  <Flex>
    <Box>
      <Heading>
        4<Emoji />4
      </Heading>
      <SubHeading>Oops! Page Not Found</SubHeading>
      <P>
        Sorry! The page you were trying to reach does not exist or no longer exists.
      </P>
      <ActionLink to="/">Back to homepage</ActionLink>
    </Box>
  </Flex>
);

export default NotFound;
