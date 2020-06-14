import React, { FC } from 'react';
import styled from '@emotion/styled';
import { MdMenu } from 'react-icons/md';
import { Wrap, Flex } from '../../atoms';
import ds from '../../../theme/ds';

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: 50px;
  width: 100vw;
  z-index: 120;
  /* @media (min-width: ${ds.bp('sm')}) {
    display: none;
  } */
`;

const GutterBottom = styled.div`
  margin-top: 50px;
`;

const Logo = styled.h1`
  color: ${ds.brand('main')};
  font-size: 24px;
  line-height: 40px;
`;

const Header: FC = () => {
  return (
    <Container>
      <MdMenu />
      <GutterBottom />
    </Container>
  );
};

export default Header;
