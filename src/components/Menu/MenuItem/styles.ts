import styled, { css } from 'styled-components';

export const MenuItemContainer = styled.a`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.2rem 2rem 1.2rem 3.2rem;
    border-left: 3px solid transparent;

    font-weight: 500;
    color: ${theme.color.gray};

    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: 0.14s ease-in-out;

    &[aria-current='page'],
    &:hover {
      background-color: ${`${theme.color.gray}66`};
      border-left-color: ${theme.color.tertiary};
      color: ${theme.color.white};
    }
  `};
`;
