import styled from 'styled-components';
import { color } from '../shared/app-styles';

export const StyledContentWrapper = styled.div`
  width: calc(100vw - 64px);

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;