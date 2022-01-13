import styled from 'styled-components';

export const CardContainer = styled.button`
  display: block;
  background: none;
  appearance: none;
  width: fit-content;
  height: fit-content;
`;

export const CardWrapper = styled.figure`
  position: relative;
  display: block;
  width: 240px;
  text-align: left;

  picture {
    display: block;
    border-radius: 3px;
    box-shadow: 0 10px 15px 8px rgba(0, 0, 0, 0.35);
    overflow: hidden;

    img {
      display: block;
      width: 240px;
      height: 355px;
      object-fit: cover;
      border-radius: 3px;
    }
  }

  figcaption {
    margin-top: 1rem;

    h3 {
      color: ${({ theme }) => theme.color.white};
      font-weight: 500;
    }

    p {
      color: ${({ theme }) => theme.color.gray};
    }
  }
`;

export const CardBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 280px;
  right: 0;
  transform: translateX(50%);
  width: 4rem;
  height: 4rem;
  background: linear-gradient(to bottom, #f98e05, #d57a07);
  border-radius: 50%;
  color: ${({ theme }) => theme.color.white};
  font-weight: 500;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
  user-select: none;
`;
