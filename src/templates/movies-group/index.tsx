import React from 'react';

import { IMovie } from '@/@types/movie';
import { Content } from '@/components/Content';
import Layout from '@/components/Layout';

export type TemplateMoviesGroupProps = {
  movies: IMovie[];
};

const TemplateMoviesGroup = ({ movies }) => {
  return (
    <Layout>
      <Content movies={movies} />
    </Layout>
  );
};

export default React.memo(TemplateMoviesGroup);
