import styled, { createGlobalStyle, css } from 'styled-components';

export const color = {
  background: '#FFFFFF',
  text: '#000000',
  lightShade: '#f3f3f3',
  accent: '#7C9072',
};

export const spacing = {
  1: '4px',
  2: '8px',
  3: '16px',
  4: '24px',
  5: '32px',
  6: '64px',
};

export const transitions = {
  standard: propertyValue => css`
    transition: 300ms ease-in-out;
    transition-property: ${propertyValue};
  `,
  interaction: propertyValue => css`
    transition: 150ms ease-in-out;
    transition-property: ${propertyValue};
  `,
};

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

  h1, h2, h3, h4, h5 {
    font-family: 'Playfair Display', serif;
  }

  a {
    color: ${color.text};
    font-weight: bold;
    ${transitions.interaction('color')}

    &:hover {
      color: ${color.accent};
    }
  }
`;

export const StyledPageWrapper = styled.div`
  position: absolute;
  padding-top: 32px;
  ${transitions.standard('opacity, transform')}

  &.page-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  &.page-enter-active {
    opacity: 1;
    transform: translateY(0);
  }

  &.page-exit {
    opacity: 1;
    transform: translateY(0);
  }

  &.page-exit-active {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

export const StyledMainSection = styled.div`
  margin-bottom: 120px;
`;

export const StyledSecondarySection = styled.div`
  margin-bottom: 64px;
`;
