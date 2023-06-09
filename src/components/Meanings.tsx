import React, { FC } from 'react';
import { Meaning } from '../types/word';
import styled from 'styled-components';
import { device } from '../styles/mediaQueries';

interface NounProps {
  item: Meaning | undefined;
}

const Meanings: FC<NounProps> = ({ item }) => {
  return (
    <Container>
      <Heading>
        <Title>{item?.partOfSpeech}</Title>
        <Line />
      </Heading>

      <Content>
        <SubTitle>Meaning</SubTitle>

        {item?.definitions.map((defItem, index) => (
          <React.Fragment key={index}>
            <List>
              <Dot />
              <ListItem>{defItem.definition}</ListItem>
            </List>
            <ExampleDef>
              {defItem.example &&
                defItem.example.replace(
                  defItem.example,
                  `“${defItem.example}”`
                )}
            </ExampleDef>
          </React.Fragment>
        ))}

        <Synonyms>
          {item?.synonyms?.length !== 0 && <SubTitle>Synonyms</SubTitle>}

          <SynonymItemWrapper>
            {item?.synonyms?.map((item, index) => (
              <SynonymItem key={index}>{item}</SynonymItem>
            ))}
          </SynonymItemWrapper>
        </Synonyms>

        <Synonyms>
          {item?.antonyms?.length !== 0 && <SubTitle>Antonyms</SubTitle>}

          <SynonymItemWrapper>
            {item?.antonyms?.map((item, index) => (
              <SynonymItem key={index}>{item}</SynonymItem>
            ))}
          </SynonymItemWrapper>
        </Synonyms>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  @media ${device.tablet} {
    margin-top: 40px;
  }
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
  font-style: italic;

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 29px;
  }
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

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 24px;
  }
`;

const List = styled.div`
  display: flex;
  gap: 20px;
  &:first-of-type {
    margin-top: 15px;
  }

  @media ${device.tablet} {
    &:first-of-type {
      margin-top: 25px;
    }
  }
`;

const Dot = styled.div`
  width: 5px;
  height: 5px;
  background: #8f19e8;
  border-radius: 50%;
  margin-top: 10px;
`;

const ListItem = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  max-width: 302px;
  flex: 1;

  /* list-style: none; */

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 24px;

    max-width: 100%;
  }
`;

const Synonyms = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const SynonymItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SynonymItem = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  /* A445ED */

  color: #a445ed;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 24px;
  }
`;

const ExampleDef = styled(ListItem)`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  /* or 160% */

  /* 757575 */

  color: #757575;
  margin-top: 13px;
  margin-left: 20px;
`;
export default Meanings;
