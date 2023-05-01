import { FC } from 'react';
import { Meaning, Word } from '../types/word';
import styled from 'styled-components';

interface NounProps {
  item: Meaning | undefined;
}

const Noun: FC<NounProps> = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <Heading>
        <Title>{item?.partOfSpeech}</Title>
        <Line />
      </Heading>

      <Content>
        <SubTitle>Meaning</SubTitle>
        {item?.definitions.map((item, index) => (
          <ul key={index}>
            <li>{item.definition}</li>
          </ul>
        ))}

        <Synonyms>
          <SubTitle>Synonyms</SubTitle>
          {item?.synonyms?.map((item, index) => (
            <h4>{item}</h4>
          ))}
        </Synonyms>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e9e9e9;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const SubTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  /* 757575 */

  color: #757575;
`;

const Synonyms = styled.div`
  margin-top: 16px;
  display: flex;
`;
export default Noun;
