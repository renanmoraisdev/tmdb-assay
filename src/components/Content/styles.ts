import styled from 'styled-components';

import { CardContainer } from './Card/styles';

export const ContentContainer = styled.div`
  width: 100%;
  padding: 6.4rem 4.8rem;
`;

export const CardsWrapper = styled.div`
  width: calc(100% + 3rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin: 0 -2rem;

  ${CardContainer} {
    padding: 0 2rem;
    margin-bottom: 6rem;
  }
`;
