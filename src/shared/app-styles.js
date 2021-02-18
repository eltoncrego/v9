import { createGlobalStyle } from "styled-components";

export const color = {
  background: '#FFFFFF',
  text: '#000000',
  lightShade: '#f3f3f3',
  accent: '#7C9072',
}

export const ApplicationStyles = createGlobalStyle`
  body { 
    font-family: 'Karla', sans-serif;
    background-color: ${color.background};
    color: ${color.text};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`