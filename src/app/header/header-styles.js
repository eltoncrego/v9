import styled from 'styled-components';
import { color, spacing, transitions } from '../../shared/app-styles';

export const StyledHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: ${spacing[5]} 0 ${spacing[2]};
  border-bottom: 1px solid ${color.lightShade};

  h1 {
    font-size: 20px;
  }

  a {
    color: ${color.text};
    text-decoration: none;
    ${transitions.interaction('color')};

    &:hover {
      color: ${color.accent};
    }
  }
`;
