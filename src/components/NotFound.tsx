import { FC } from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Container>
      {/* add sad smiley */}
      <h1>😕</h1>
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
`;

export default NotFound;
