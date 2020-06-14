import React, { FC, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import styled from '@emotion/styled';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Button, Flex } from '../../atoms';
import ds from '../../../theme/ds';

const HeaderContainer = styled.div`
  position: fixed;
  height: 42px;
  width: 100vw;
  z-index: 120;
  @media (min-width: ${ds.bp('sm')}) {
    display: none;
  }
`;

const SidebarContainer = styled.aside`
  display: flex;
  flex: 1;
  @media (max-width: ${ds.bp('sm')}) {
    display: none;
    &.open {
      display: flex;
    }
  }
`;

const MainContainer = styled.main`
  display: flex;
  flex: 2;

  @media (max-width: ${ds.bp('sm')}) {
    flex: auto;
  }
`;

const PageLayout: FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <HeaderContainer>
        <Button onClick={toggleMenuHandler}>
          <MdMenu
            style={{
              fontSize: '24px',
              color: ds.brand('main'),
              margin: '8px 0px 0px 8px',
            }}
          />
        </Button>
      </HeaderContainer>
      <Flex style={{ width: '100vw' }}>
        <SidebarContainer className={isMenuOpen ? 'open' : 'close'}>
          <Sidebar onClick={toggleMenuHandler} />
        </SidebarContainer>

        <MainContainer>
          <div style={{ width: '100%' }}>
            {children}
            <Footer />
          </div>
        </MainContainer>
      </Flex>
    </div>
  );
};

export default PageLayout;
