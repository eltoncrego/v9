import styled from 'styled-components';

export const StyledProfileImage = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/content/images/profile.jpg);
  width: 400px;
  height: 500px;
  background-size: cover;
  margin-right: 24px;
  flex-basis: 400px;
`;

export const StyledHeroSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledHeroText = styled.div`
  max-width: 400px;
`
