import React, { ReactElement } from 'react';

import { IMovie } from '@/@types/movie';

import * as S from './styles';

interface CardProps {
  movie: IMovie;
  setModalContent: (state: boolean) => void;
  setCurrentMovie: React.Dispatch<React.SetStateAction<IMovie>>;
}

export const Card = ({
  setModalContent,
  setCurrentMovie,
  movie,
}: CardProps): ReactElement => {
  return (
    <S.CardContainer
      type="button"
      onClick={() => {
        setCurrentMovie(movie);
        setModalContent(true);
      }}
    >
      <S.CardWrapper>
        <picture>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`[${movie.original_title}]`}
          />
        </picture>
        <figcaption>
          <h3>{movie.original_title}</h3>
        </figcaption>
        <S.CardBadge>{movie.vote_average}</S.CardBadge>
      </S.CardWrapper>
    </S.CardContainer>
  );
};
