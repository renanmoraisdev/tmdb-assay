import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';

import * as S from './styles';

interface MenuItemProps extends LinkProps {
  active?: boolean;
  children: ReactNode;
}

export const MenuItem = ({
  active = false,
  children,
  href,
  ...props
}: MenuItemProps): ReactElement => {
  const { asPath } = useRouter();

  const isCurrent = asPath === href || active ? 'page' : 'false';

  return (
    <Link href={href} passHref {...props}>
      <S.MenuItemContainer aria-current={isCurrent}>
        {children}
      </S.MenuItemContainer>
    </Link>
  );
};
