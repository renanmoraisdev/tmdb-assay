import React, { ReactNode } from 'react';

import configClient from '@/config/client';
import { TitleHidden } from '@/styles';

import { Menu } from '../Menu';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <TitleHidden>{configClient.title}</TitleHidden>
      <Menu />
      <main>{children}</main>
    </>
  );
};

export default React.memo(Layout);
