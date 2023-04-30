import { FC, forwardRef } from 'react';
import styled from 'styled-components';
import SearchIcon from '../svgs/SearchIcon';

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
  return (
    <FormGroup onSubmit={onSubmit}>
      {label && <Label>{label}</Label>}
      <Input type='text' ref={ref} {...rest} error={error} />
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
  background: #f4f4f4;
  color: ${({ theme }) => theme.text};
  font-size: 16px;

  &:focus {
    outline: none;
  }

  &:active {
    border: 1px solid #a445ed;
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
