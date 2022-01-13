import { ReactElement, useState } from 'react';

import { IMovie } from '@/@types/movie';

import { MovieModal } from '../Modal/MovieModal';
import { Card } from './Card';
import * as S from './styles';

type ContentProps = {
  movies: IMovie[];
};

export const Content = ({ movies }: ContentProps): ReactElement => {
  const [currentMovie, setCurrentMovie] = useState<IMovie>({});
  const [modalContent, setModalContent] = useState(false);

  return (
    <S.ContentContainer>
      <S.CardsWrapper>
        {movies?.map(movie => (
          <Card
            key={movie.id}
            movie={movie}
            setCurrentMovie={setCurrentMovie}
            setModalContent={setModalContent}
          />
        ))}
      </S.CardsWrapper>
      <MovieModal
        movie={currentMovie}
        open={!!modalContent}
        setOpen={setModalContent}
      />
    </S.ContentContainer>
  );
};
