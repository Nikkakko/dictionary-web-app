import { useEffect, useState } from 'react';
import ArrowDown from '../svgs/ArrowDown';
import Logo from '../svgs/Logo';
import styled from 'styled-components';
import MoonIcon from '../svgs/MoonIcon';
import Switch from 'react-switch';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggleTheme } from '../features/themeSlice';
import { setFont } from '../features/fontSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useAppSelector(state => state.theme);
  const { font } = useAppSelector(state => state.font);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const fontsList = ['Inter', 'Lora', 'Inconsolata'];

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  const handleFontChange = (font: string) => {
    dispatch(setFont(font));
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.fontFamily = font || 'sans-serif';
  }, [font]);

  return (
    <Container>
      <Logo />
      <RightWrapper>
        <SelectFont onClick={() => setIsOpen(prevState => !prevState)}>
          <span>{font}</span>
          <ArrowDown isOpen={isOpen} />
        </SelectFont>

        {isOpen && (
          <FontsWrapper>
            {fontsList.map((font, index) => (
              <FontLists key={index}>
                <ListItem
                  onClick={() => handleFontChange(font)}
                  style={{
                    fontFamily: font,
                  }}
                >
                  {font}
                </ListItem>
              </FontLists>
            ))}
          </FontsWrapper>
        )}

        <Line />
        <SelectTheme>
          {/* Switch Button */}
          <Switch
            checked={isDarkMode}
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
          <MoonIcon stroke={isDarkMode ? '#A445ED' : '#757575'} />
        </SelectTheme>
      </RightWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
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
  cursor: pointer;

  span {
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    font-style: normal;
  }
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

const FontsWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 16px 32px 16px 16px;

  position: absolute;

  top: 36px;
  right: 40px;

  z-index: 999;
`;

const FontLists = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`;

const ListItem = styled.span`
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  font-style: normal;

  &:hover {
    color: #a445ed;
  }
`;

export default Header;
