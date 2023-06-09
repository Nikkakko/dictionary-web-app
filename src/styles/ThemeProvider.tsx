import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from '../app/store';
import { darkTheme, lightTheme } from './Theme';

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};
