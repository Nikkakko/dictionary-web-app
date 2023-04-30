import styled from 'styled-components';
import InputField from './InputField';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  inputValue: string;
};

const MainContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

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

      {/* Preview Component */}
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
