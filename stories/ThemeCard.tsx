import * as React from 'react';
import { ThemeProvider, styled, createGlobalStyle } from '../lib/style';
import { makeLight, makeDark } from '../lib/theme';
import { cover } from 'polished';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ubuntu;
  }
`;

const ThemeLayout = styled.section`
  display: flex;
  ${cover()}
`;

const CardEl = styled.section`
  background-color: ${p => p.theme.pageColor};
  color: ${p => p.theme.textNormal};
  display: block;
  flex: 1;
  padding: 1rem;

  header {
    color: ${p => p.theme.textNormal};
    font-weight: bold;
    margin: .5rem 0;

    &:first-child {
      margin-top: 0;
    }
  }
`;

interface Props {
  children: () => JSX.Element;
}

export function ThemeCard({ children }: Props) {
  return (
    <ThemeLayout>
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
    </ThemeLayout>
  )
}

export const light1 = makeLight('#dd88dd', '#dd44dd');
export const light2 = makeLight('#00bbbb', '#00bbbb');
export const dark1 = makeDark('#224444', '#007766');
export const dark2 = makeDark('#333355', '#664499');
