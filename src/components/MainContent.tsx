import styled from 'styled-components';
import InputField from './InputField';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getWord } from '../services/fetchData';
import { setWord } from '../features/dictionarySlice';
import WordPreview from './WordPreview';

type Inputs = {
  inputValue: string;
};

const MainContent = () => {
  const { word } = useAppSelector(state => state.dictionary);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    getValues,

    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onBlur',
  });
  console.log(word);
  const { inputValue } = getValues();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      const response = await getWord(data.inputValue);
      dispatch(setWord(response));
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

      {inputValue && <WordPreview word={word} />}
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
