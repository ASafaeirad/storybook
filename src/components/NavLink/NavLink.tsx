import type { CSSObject, Sx } from '@mantine/core';
import { NavLink as MantineNavLink } from '@mantine/core';
import { Link as TanstackLink, useLocation } from '@tanstack/react-location';

export interface NavLinkProps {
  label: string;
  icon: JSX.Element;
  to: string;
  id: string;
}

export const navLinkRootStyles: Exclude<Sx, CSSObject> = theme => ({
  borderRadius: 4,
  fontWeight: 500,
  padding: 10,
  color: theme.colors.fgMuted[6],
});

export const NavLink = ({ label, icon, to, id }: NavLinkProps) => {
  const {
    current: { pathname },
  } = useLocation();

  return (
    <MantineNavLink
      to={to}
      component={TanstackLink}
      key={label}
      label={label}
      rightSection={icon}
      active={pathname === to}
      sx={navLinkRootStyles}
    />
  );
};
