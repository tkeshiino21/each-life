import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import ds from '../../theme/ds';

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid ${ds.brand('main')};
  }
`;
