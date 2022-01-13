import { ReactElement } from 'react';

import { MenuItem } from './MenuItem';
import * as S from './styles';

export const Menu = (): ReactElement => {
  return (
    <S.MenuContainer>
      <S.Logo>
        <h2>KOBE</h2>
      </S.Logo>

      <S.MenuItemsWrapper>
        <MenuItem href="/upcoming-movies">
          <p>Upcoming Movies</p>
        </MenuItem>
        <MenuItem href="/popular-movies">
          <p>Popular Movies</p>
        </MenuItem>
        <MenuItem href="/top-rated-movies">
          <p>Top Rated Movies</p>
        </MenuItem>
      </S.MenuItemsWrapper>
    </S.MenuContainer>
  );
};
