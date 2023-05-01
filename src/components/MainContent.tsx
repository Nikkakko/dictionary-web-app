import styled from 'styled-components';
import InputField from './InputField';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getWord } from '../services/fetchData';
import { setWord } from '../features/dictionarySlice';
import WordPreview from './WordPreview';
import { useState } from 'react';
import Loader from './Loader';
import Noun from './Noun';
import { Meaning } from '../types/word';

type Inputs = {
  inputValue: string;
};

const MainContent = () => {
  const { word } = useAppSelector(state => state.dictionary);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const noun = word?.meanings.find(
    (item: Meaning) => item.partOfSpeech === 'noun'
  );
  const verb = word?.meanings.find(
    (item: Meaning) => item.partOfSpeech === 'verb'
  );

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      setIsLoading(true);
      const response = await getWord(data.inputValue);
      dispatch(setWord(response));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {/* Input Component */}

      <InputField
        {...register('inputValue', {
          required: 'Whoops, can’t be empty…',
          pattern: /^[A-Za-z]+$/i,
        })}
        error={errors.inputValue?.message}
        placeholder='Search for any word...'
        onSubmit={handleSubmit(onSubmit)}
      />

      {isLoading && <Loader />}

      {word && Object.keys(word).length > 0 && !isLoading && (
        <WordPreview word={word} />
      )}

      <Noun item={noun} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin-top: 24px;
`;

export default MainContent;
