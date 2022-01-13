import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import { IMovieResponse } from '@/@types/movie';
import { makeApi } from '@/services/api';
import TemplateMoviesGroup, {
  TemplateMoviesGroupProps,
} from '@/templates/movies-group';

const TopRatedMovies: NextPage<TemplateMoviesGroupProps> = props => (
  <TemplateMoviesGroup {...props} />
);
export const getServerSideProps: GetServerSideProps<TemplateMoviesGroupProps> =
  async context => {
    try {
      const api = makeApi(context);
      const path = `/movie/top_rated`;
      const response = await api.get<IMovieResponse>(path);

      return {
        props: {
          path,
          movies: response.data.results,
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

export default TopRatedMovies;
