import * as React from 'react';
import { ThemeProvider, styled } from '../lib/style';
import { makeLight, makeDark } from '../lib/theme';
import { createGlobalStyle } from 'styled-components';

const CardEl = styled.section`
  background-color: ${p => p.theme.pageColor};
  display: block;
  padding: 1rem;
`;

interface Props {
  children: () => JSX.Element;
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export function ThemeCard({ children }: Props) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={light1}>
        <CardEl>
          {children()}
        </CardEl>
      </ThemeProvider>
      <ThemeProvider theme={light2}>
        <CardEl>
          {children()}
        </CardEl>
      </ThemeProvider>
      <ThemeProvider theme={dark1}>
        <CardEl>
          {children()}
        </CardEl>
      </ThemeProvider>
      <ThemeProvider theme={dark2}>
        <CardEl>
          {children()}
        </CardEl>
      </ThemeProvider>
    </React.Fragment>
  )
}

export const light1 = makeLight('#dd88dd', '#dd44dd');
export const light2 = makeLight('#00bbbb', '#00bbbb');
export const dark1 = makeDark('#224444', '#007766');
export const dark2 = makeDark('#333355', '#664499');
