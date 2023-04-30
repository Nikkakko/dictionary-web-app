import ArrowDown from '../svgs/ArrowDown';
import { useState } from 'react';
import Logo from '../svgs/Logo';
import styled from 'styled-components';
import MoonIcon from '../svgs/MoonIcon';
import Switch from 'react-switch';
import { useAppDispatch } from '../app/hooks';
import { toggleTheme } from '../features/themeSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const handleThemeChange = () => {
    setIsChecked(!isChecked);
    dispatch(toggleTheme());
  };
  return (
    <Container>
      <Logo />
      <RightWrapper>
        <SelectFont>
          <span>Sans Serif</span>
          <ArrowDown />
        </SelectFont>
        <Line />
        <SelectTheme>
          {/* Switch Button */}
          <Switch
            checked={isChecked}
            onChange={() => {
              handleThemeChange();
            }}
            offColor='#757575'
            onColor='#A445ED'
            borderRadius={10}
            uncheckedIcon={false}
            checkedIcon={false}
            width={40}
            handleDiameter={14}
            height={20}
          />
          <MoonIcon stroke={isChecked ? '#A445ED' : '#757575'} />
        </SelectTheme>
      </RightWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SelectFont = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Line = styled.div`
  width: 1px;
  height: 32px;
  background-color: #e9e9e9;
`;

const SelectTheme = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export default Header;