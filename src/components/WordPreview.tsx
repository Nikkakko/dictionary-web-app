import { FC } from 'react';
import { Word } from '../types/word';
import styled from 'styled-components';
import PlayIcon from '../svgs/PlayIcon';
import { useRef } from 'react';

interface WordPreviewProps {
  word: Word;
}

const WordPreview: FC<WordPreviewProps> = ({ word }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    audioRef.current?.play();
  };

  const findAudio = () => {
    //find audio that is not empty string
    const audio = word?.phonetics.find(phonetic => phonetic.audio !== '');
    return audio?.audio;
  };

  const findPhonetic = () => {
    const phonetic = word?.phonetics.find(
      phonetic => phonetic.text !== '' && phonetic.text !== undefined
    );

    return phonetic?.text;
  };

  return (
    <Container>
      <Text>
        <WordTitle>{word?.word}</WordTitle>
        <Phonetic>{word?.phonetic || findPhonetic()}</Phonetic>
      </Text>
      <Player
        onClick={() => {
          playAudio();
        }}
      >
        <audio
          controls
          src={findAudio()}
          style={{ display: 'none' }}
          ref={audioRef}
        />
        <PlayIcon />
      </Player>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const WordTitle = styled.h1`
  font-size: 32px;
  line-height: 39px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

const Phonetic = styled.p`
  color: #a445ed;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
`;

const Player = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;

  cursor: pointer;
`;

export default WordPreview;
