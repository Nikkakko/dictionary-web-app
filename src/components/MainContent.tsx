import styled from 'styled-components';
import InputField from './InputField';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getWord } from '../services/fetchData';
import { setWord } from '../features/dictionarySlice';
import WordPreview from './WordPreview';
import { useState } from 'react';
import Loader from './Loader';
import Meanings from './Meanings';
import { Meaning } from '../types/word';
import { NotFound } from '.';
import { device } from '../styles/mediaQueries';

type Inputs = {
  inputValue: string;
};

const MainContent = () => {
  const { word } = useAppSelector(state => state.dictionary);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

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
      setIsNotFound(false);
    } catch (error) {
      setIsLoading(false);
      setIsNotFound(true);
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

      {isNotFound && <NotFound />}

      {word && Object.keys(word).length > 0 && !isLoading && (
        <WordPreview word={word} />
      )}

      {word.meanings?.map((meaning: Meaning, index: number) => (
        <Meanings key={index} item={meaning} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin-top: 24px;

  @media ${device.tablet} {
    margin-top: 54px;
  }
`;

export default MainContent;
