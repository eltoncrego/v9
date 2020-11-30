import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { ApplicationStyles } from '../shared/styles/global';
import { theme } from '../shared/styles/styles';
import WelcomePage from '../site/welcome/welcome';

export interface AppProps {}

const App = (props: AppProps) => (
  <ThemeProvider theme={theme.dark}>
    <Normalize />
    <ApplicationStyles />
    <WelcomePage />
  </ThemeProvider>
);

export default App;
