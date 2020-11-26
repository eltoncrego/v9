import { createGlobalStyle } from 'styled-components';

export const ApplicationStyles = createGlobalStyle`
  html {
    background-color: ${(props: any) => props.theme.color.back};
    color: ${(props: any) => props.theme.color.front};
  }
`;
