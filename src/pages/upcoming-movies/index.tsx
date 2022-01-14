import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import { IGenreResponse, IMovieResponse } from '@/@types/movie';
import { makeApi } from '@/services/api';
import TemplateMoviesGroup, {
  TemplateMoviesGroupProps,
} from '@/templates/movies-group';

const UpcomingMovies: NextPage<TemplateMoviesGroupProps> = props => (
  <TemplateMoviesGroup {...props} />
);

export const getServerSideProps: GetServerSideProps<TemplateMoviesGroupProps> =
  async context => {
    try {
      const api = makeApi(context);
      const path = `/movie/upcoming`;
      const response = await api.get<IMovieResponse>(path);

      const genresResponse = await api.get<IGenreResponse>('/genre/movie/list');

      return {
        props: {
          path,
          movies: response.data.results,
          genres: genresResponse.data.genres,
        },
      };
    } catch ({ message }) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  };

export default UpcomingMovies;
