import { FC } from 'react';
import styled from 'styled-components';
import { device } from '../styles/mediaQueries';

const NotFound = () => {
  return (
    <Container>
      {/* add sad smiley */}
      <h2>😕</h2>
      <h1>No Definations Found</h1>

      <p>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 44px;
  gap: 24px;

  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
    margin-top: 132px;
    gap: 0;

    h1 {
      margin-top: 44px;
    }

    p {
      margin-top: 24px;
      max-width: 600px;
    }
  }
`;

export default NotFound;
