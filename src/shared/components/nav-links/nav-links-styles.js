import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { color, spacing } from '../../styles/app-styles';

export const StyledNavigationLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const StyledNavigationLink = styled(Link)`
  text-decoration: none;
  font-weight: normal;
`;

export const StyledNavigationItem = styled.li`
  &:not(:first-child) {
    margin-left: ${spacing[3]};
  }

  & > ${StyledNavigationLink} {
    ${({ isCurrentPath }) =>
      isCurrentPath
        ? css`
            text-decoration: underline;
            pointer-events: none;
            &:hover {
              color: ${color.text};
            }
          `
        : css`
            &:hover {
              text-decoration: underline;
            }
          `}
  }
`;
