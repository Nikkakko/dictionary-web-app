import { FC } from 'react';
import { Word } from '../types/word';

interface WordPreviewProps {
  word: Word;
}

const WordPreview: FC<WordPreviewProps> = ({ word }) => {
  return <div>{word?.word}</div>;
};

export default WordPreview;
