import { ReactElement, useState } from 'react';

import { IGenre, IMovie, IMovieResponse } from '@/@types/movie';
import { makeApi } from '@/services/api';

import { MovieModal } from '../Modal/MovieModal';
import { Card } from './Card';
import * as S from './styles';

type ContentProps = {
  path: string;
  movies: IMovie[];
  genres: IGenre[];
};

export const Content = ({
  path,
  movies,
  genres,
}: ContentProps): ReactElement => {
  const [currentMovie, setCurrentMovie] = useState<IMovie>({});
  const [collectionMovies, setCollectionMovies] = useState<IMovie[]>(movies);
  const [modalContent, setModalContent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const loadMoreMovies = () => {
    setLoading(true);
    const api = makeApi();

    api.get<IMovieResponse>(`${path}?page=${page + 1}`).then(response => {
      setCollectionMovies([...collectionMovies, ...response.data.results]);
      setLoading(false);
      setPage(page + 1);
    });
  };

  return (
    <S.ContentContainer>
      <S.CardsWrapper>
        {collectionMovies?.map(movie => (
          <Card
            key={movie.id}
            movie={movie}
            setCurrentMovie={setCurrentMovie}
            setModalContent={setModalContent}
          />
        ))}
      </S.CardsWrapper>

      <S.LoadButton onClick={loadMoreMovies}>
        {loading ? 'Carregando...' : 'Carregar Mais'}
      </S.LoadButton>

      <MovieModal
        movie={currentMovie}
        genres={genres}
        open={!!modalContent}
        setOpen={setModalContent}
      />
    </S.ContentContainer>
  );
};
