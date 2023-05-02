import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    error: string;
    logoBorder: string;
    background: string;
    inputBG: string;
    popUpBG: string;
  }
}
