import { useAppSelector } from '../app/hooks';
import styled from 'styled-components';
import NewWindow from '../svgs/newWindow';
import { device } from '../styles/mediaQueries';

const Footer = () => {
  const { word } = useAppSelector(state => state.dictionary);

  return (
    <Container>
      {word.word && (
        <Wrapper>
          <p>Source</p>
          <Source>
            <span>{word.sourceUrls?.[0]}</span>
            <NewWindow />
          </Source>
        </Wrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  border-top: 1px solid #e9e9e9;

  @media ${device.tablet} {
    margin-top: 24px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  gap: 8px;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-decoration-line: underline;
    max-width: fit-content;

    /* 757575 */

    color: #757575;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-decoration-line: underline;
    cursor: pointer;

    /* 2D2D2D */
  }

  @media ${device.tablet} {
    flex-direction: row;
    gap: 20px;
  }
`;

const Source = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

export default Footer;
