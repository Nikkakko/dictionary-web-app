import { createGlobalStyle } from 'styled-components';
import {
  InterBold,
  InterRegular,
  InterVariableFont,
} from '../assets/fonts/inter';
import {
  LoraRegular,
  LoraBold,
  LoraBoldItalic,
  LoraItalic,
  LoraVariableFont,
} from '../assets/fonts/lora';
import {
  InconsolataBold,
  InconsolataRegular,
  InconsolataVariableFont,
} from '../assets/fonts/inconsolata';

export const GlobalStyles = createGlobalStyle`


    @font-face {
        font-family: 'Inter';
        src: url(${InterVariableFont}), url(${InterRegular}), url(${InterBold});
        font-weight: 100 900;
    }

    @font-face {
        font-family: 'Lora';
        src: url(${LoraVariableFont}), url(${LoraRegular}), url(${LoraBold}), url(${LoraItalic}), url(${LoraBoldItalic});
        font-weight: 100 900;
    }

    @font-face {
        font-family: 'Inconsolata';
        src: url(${InconsolataVariableFont}), url(${InconsolataRegular}), url(${InconsolataBold});
        font-weight: 100 900;
    }
   
    

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    

    body{
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
`;
