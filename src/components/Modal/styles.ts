import styled, { css } from 'styled-components';

interface WrapperProps {
  $open?: boolean;
}

export const Content = styled.div`
  ${() => css`
    width: fit-content;
    height: fit-content;
    opacity: 0;
    transform: translate(0, 20px);
    transition: transform 0.2s ease-in, opacity 0.2s ease-in;
    margin: auto;
    cursor: default;
  `}
`;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $open }) => css`
    overflow-y: auto;
    padding: 6rem 0;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9999;

    opacity: 0;
    visibility: hidden;
    transition: ${theme.transition.default};

    ${$open &&
    css`
      opacity: 1;
      visibility: visible;

      ${Content} {
        opacity: 1;
        transform: translate(0, 0);
        transition: transform 0.3s ease-out 0.2s, opacity 0.3s ease-out 0.2s;
      }
    `}
  `}
`;
