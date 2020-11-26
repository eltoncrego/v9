import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { ApplicationStyles } from '../shared/styles/global';
import { theme } from '../shared/styles/styles';

export interface AppProps {}

const App = (props: AppProps) => (
  <ThemeProvider theme={theme.dark}>
    <Normalize />
    <ApplicationStyles />
    <h1>Hello React Typescript!</h1>
  </ThemeProvider>
);

export default App;
