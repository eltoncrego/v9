import { createGlobalStyle } from 'styled-components';

export const ApplicationStyles = createGlobalStyle`
  html {
    background-color: ${(props: any) => props.theme.color.back};
    color: ${(props: any) => props.theme.color.front};
    font-family: 'Montserrat', sans-serif;
  }

  h1, h2, h3, h4, h4 {
    margin: 0;
    padding: 0;
  }
`;
