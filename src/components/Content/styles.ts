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

export const LoadButton = styled.button`
  padding: 0.8rem;
  width: 100%;
  margin: 3rem auto 0;
  border-radius: 5rem;
  background: #fff;
  background-size: 100% 200%;
  background-position: center;
  text-align: center;
  color: #222;

  transition: 0.16s ease-in-out;

  &:hover {
    background-position: center 100%;
  }
`;
