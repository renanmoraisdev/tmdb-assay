import dynamic from 'next/dynamic';
import { ReactElement } from 'react';

import { IMovie } from '@/@types/movie';

import * as S from './styles';

const Modal = dynamic(() => import('@/components/Modal'), { ssr: false });

interface MovieModalProps {
  open: boolean;
  setOpen: (state: boolean) => void;
  movie: IMovie;
}

export const MovieModal = ({
  open,
  setOpen,
  movie,
}: MovieModalProps): ReactElement => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <S.MovieModalContainer>
        <picture>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`[${movie.original_title}]`}
          />

          <div className="picture__footer">
            <h2 className="title">{movie.original_title}</h2>
          </div>
        </picture>
        <div className="movie-modal__body">
          <header>
            <div>
              <div>
                <span>{movie.original_title}</span>
              </div>
            </div>
            <p>Horror, Mystery, Thriller</p>
          </header>
          <main>
            <p>{movie.overview}</p>

            <p>
              <span className="info-title">Release Date:&nbsp;</span>
              <span>{movie.release_date}</span>
            </p>

            <p>
              <span className="info-title">Vote Average:&nbsp;</span>
              <span>{movie.vote_average}</span>
            </p>

            <S.CloseButton type="button" onClick={() => setOpen(false)}>
              Fechar
            </S.CloseButton>
          </main>
        </div>
      </S.MovieModalContainer>
    </Modal>
  );
};
