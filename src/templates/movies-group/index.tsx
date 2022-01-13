import React from 'react';

import { IMovie } from '@/@types/movie';
import { Content } from '@/components/Content';
import Layout from '@/components/Layout';

export type TemplateMoviesGroupProps = {
  path: string;
  movies: IMovie[];
};

const TemplateMoviesGroup = ({ path, movies }) => {
  return (
    <Layout>
      <Content path={path} movies={movies} />
    </Layout>
  );
};

export default React.memo(TemplateMoviesGroup);
