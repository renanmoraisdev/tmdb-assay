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
        <MenuItem href="#!" active>
          <p>Upcoming Movies</p>
        </MenuItem>
      </S.MenuItemsWrapper>
    </S.MenuContainer>
  );
};
