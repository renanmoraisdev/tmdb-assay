import styled from 'styled-components';

export const MovieModalContainer = styled.div`
  display: block;
  width: 100vw;
  max-width: 600px;
  max-height: 100%;
  margin: 0 auto;

  picture {
    position: relative;
    display: block;
    border-radius: 25px 25px 0 0;
    width: 100%;
    height: 36rem;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        transparent 60%,
        rgba(0, 0, 0, 0.15) 70%,
        rgba(0, 0, 0, 0.15) 100%
      );
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-position: center 0;
    }

    .picture__footer {
      position: absolute;
      z-index: 1;
      padding: 3rem;
      width: 100%;
      left: 0;
      bottom: 0;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .title {
      padding: 1rem 2rem;
      background: rgba(0, 0, 0, 0.25);
      border-radius: 5rem;
      font-weight: 600;
      color: #fff;
    }

    .rating-age {
      padding: 0.8rem 0.6rem;
      background: #fff;
      border-radius: 1.2rem;
      font-size: 1.4rem;
      font-weight: 500;
      color: #444;
    }
  }

  .movie-modal__body {
    background: #fff;
    border-radius: 0 0 25px 25px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.primary};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${({ theme }) => theme.color.white};
      padding: 2rem 3rem;

      & > div {
        display: flex;
        & > :first-child {
          display: flex;
          align-items: center;
          margin-right: 2rem;

          & > :first-child {
            margin-right: 0.6rem;
          }
        }
      }
    }

    main {
      color: ${({ theme }) => theme.color.gray};
      padding: 3rem;

      p {
        margin-bottom: 1rem;
      }

      .info-title {
        font-weight: 600;
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;

export const CloseButton = styled.button`
  padding: 0.6rem;
  width: 100%;
  margin: 3rem auto 0;
  border-radius: 5rem;
  background: linear-gradient(to bottom, #e13c3c, #cc0000);
  background-size: 100% 200%;
  background-position: center;
  text-align: center;
  color: #fff;

  transition: 0.16s ease-in-out;

  &:hover {
    background-position: center 100%;
  }
`;
