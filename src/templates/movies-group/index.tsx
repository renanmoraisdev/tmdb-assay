import React from 'react';

import { IGenre, IMovie } from '@/@types/movie';
import { Content } from '@/components/Content';
import Layout from '@/components/Layout';

export type TemplateMoviesGroupProps = {
  path: string;
  movies: IMovie[];
  genres: IGenre[];
};

const TemplateMoviesGroup = ({ path, movies, genres }) => {
  return (
    <Layout>
      <Content path={path} movies={movies} genres={genres} />
    </Layout>
  );
};

export default React.memo(TemplateMoviesGroup);
