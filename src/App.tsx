import styled from 'styled-components';
import { Footer, Header, MainContent } from './components';
import { device } from './styles/mediaQueries';

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
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 24px 24px 85px 24px;

  @media ${device.tablet} {
    padding: 58px 39px 118px 39px;
  }

  @media ${device.laptopL} {
    padding: 58px 351px 124px 351px;
  }
`;

export default App;
