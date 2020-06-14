import React, { FC } from 'react';
import styled from '@emotion/styled';
import ds from '../../../theme/ds';
import { StyledNavLink } from '../../atoms';

const List = styled.li`
  padding-left: 0;
  list-style: none;
  line-height: 3;
  &.photo {
    margin-left: 16px;
  }
`;

type links = {
  name: string;
  link: string;
};

const Navigation: FC = () => {
  const photos: links[] = [
    {
      name: '- Spring',
      link: '/photos/spring',
    },
    {
      name: '- Summer',
      link: '/photos/summer',
    },
    {
      name: '- Autumn',
      link: '/photos/autumn',
    },
    {
      name: '- Winter',
      link: '/photos/winter',
    },
  ];
  const links: links[] = [
    {
      name: 'Books',
      link: '/books',
    },
    {
      name: 'Foods',
      link: '/foods',
    },
  ];

  return (
    <>
      <List>
        <StyledNavLink
          to="/"
          exact
          activeStyle={{
            color: ds.brand('main'),
            borderBottom: `1px solid ${ds.brand('main')}`,
          }}
        >
          Home
        </StyledNavLink>
      </List>
      <List>Photo</List>
      {photos.map((photo) => {
        return (
          <List key={photo.name} className="photo">
            <StyledNavLink
              to={photo.link}
              exact
              activeStyle={{
                color: ds.brand('main'),
                borderBottom: `1px solid ${ds.brand('main')}`,
              }}
            >
              {photo.name}
            </StyledNavLink>
          </List>
        );
      })}
      {links.map((link) => {
        return (
          <List key={link.name}>
            <StyledNavLink
              to={link.link}
              exact
              activeStyle={{
                color: ds.brand('main'),
                borderBottom: `1px solid ${ds.brand('main')}`,
              }}
            >
              {link.name}
            </StyledNavLink>
          </List>
        );
      })}
    </>
  );
};

export default Navigation;
