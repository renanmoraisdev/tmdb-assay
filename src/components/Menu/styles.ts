import styled from 'styled-components';

export const MenuContainer = styled.aside`
  width: 28rem;
  position: fixed;
  top: 0;
  right: auto;
  bottom: 0;
  left: 0;
  background: transparent;
`;

export const Logo = styled.div`
  width: 100%;
  padding: 3.2rem;
  text-align: center;
`;

export const MenuItemsWrapper = styled.nav`
  display: block;
  padding: 3.2rem 0;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.tertiary};
  }
`;

export const NavSeparator = styled.div`
  display: block;
  width: 100%;
  margin: 2rem 0;
  border-bottom: ${({ theme }) => theme.border.default};
`;
