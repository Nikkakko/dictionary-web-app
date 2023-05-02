import styled from 'styled-components';
import { Footer, Header, MainContent } from './components';

const App = () => {
  return (
    <Container>
      <Header />
      <MainContent />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  padding: 24px 24px 85px 24px;
`;

export default App;
