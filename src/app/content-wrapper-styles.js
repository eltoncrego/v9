import styled from 'styled-components';
import { spacing } from '../shared/styles/app-styles';

export const StyledContentWrapper = styled.div`
  width: calc(100vw - ${spacing[5]});

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
