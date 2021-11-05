import { NavLink as ReactNavLink } from 'react-router-dom';

import { Link } from '@chakra-ui/react';

import { noOutline } from '../../shared/chakra-util';

export const NavLink: React.FC<{ to: string }> = ({ children, to }) => (
  <Link
    {...noOutline}
    _hover={{ textDecoration: 'none' }}
    as={ReactNavLink}
    px={2}
    py={1}
    rounded={'md'}
    to={to}
  >
    {children}
  </Link>
);
