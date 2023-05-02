import { FC, forwardRef } from 'react';
import styled from 'styled-components';
import SearchIcon from '../svgs/SearchIcon';
import { useAppSelector } from '../app/hooks';
import { device } from '../styles/mediaQueries';

interface InputFieldProps {
  error?: string;
  label?: string;
  placeholder: string;
  onSubmit: () => void;
}

const InputField: FC<InputFieldProps> = forwardRef<
  HTMLInputElement,
  InputFieldProps
>(({ label, error, onSubmit, ...rest }, ref) => {
  const { font } = useAppSelector(state => state.font);
  return (
    <FormGroup onSubmit={onSubmit}>
      {label && <Label>{label}</Label>}
      <Input
        type='text'
        ref={ref}
        {...rest}
        error={error}
        style={{
          fontFamily: font,
        }}
      />
      {error && <Error>{error}</Error>}
      <Search>
        <SearchIcon onClick={onSubmit} />
      </Search>
    </FormGroup>
  );
});

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input<{
  error?: string;
}>`
  width: 100%;
  padding: 14px 24px 16.45px 24px;
  border-radius: 16px;
  border: ${({ error }) => (error ? '1px solid #FF5252' : 'none')};
  background: ${({ theme }) => theme.inputBG};
  color: ${({ theme }) => theme.text};

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  &:focus {
    outline: none;
  }

  &:active {
    border: 1px solid #a445ed;
  }

  cursor: pointer;

  @media ${device.tablet} {
    font-size: 20px;
    line-height: 24px;
  }
`;

const Label = styled.label``;

const Error = styled.span`
  color: ${({ theme }) => theme.error};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;

const Search = styled.div`
  position: absolute;
  top: 16px;
  right: 24px;
`;

export default InputField;
