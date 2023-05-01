import styled from 'styled-components';

const Loader = () => {
  return <Container />;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 24px;
  height: 100vh;
  background-color: #fff;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  &::after {
    content: '';
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: loader 1.2s linear infinite;

    @keyframes loader {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export default Loader;
