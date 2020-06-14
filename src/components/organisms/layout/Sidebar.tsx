import React, { FC } from 'react';
import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';
import { Button, Wrap } from '../../atoms';
import Navigation from './Navigation';
import ds from '../../../theme/ds';

const StyledSidebar = styled.div`
  position: fixed;
  z-index: 300;
  height: 96vh;
  margin: 20px;
  width: 380px;
  border-radius: 48px;
  background: ${ds.brand('white')};
  box-shadow: 24px 24px 64px ${ds.color('grey', '3')}, -24px -24px 64px #ffffff;

  @media (max-width: ${ds.bp('sm')}) {
    width: 300px;
  }
`;

const CloseButtonContainer = styled.div`
  display: none;
  justify-content: flex-end;
  @media (max-width: ${ds.bp('sm')}) {
    display: flex;
  }
`;

type SidebarProps = {
  onClick: () => void;
};

const Sidebar: FC<SidebarProps> = ({ onClick }) => {
  return (
    <StyledSidebar>
      <Wrap m="48px">
        <CloseButtonContainer>
          <Button onClick={onClick}>
            <MdClose
              style={{ fontSize: '24px', color: ds.color('grey', '4') }}
            />
          </Button>
        </CloseButtonContainer>
        <ul>
          <Navigation />
        </ul>
      </Wrap>
    </StyledSidebar>
  );
};

export default Sidebar;
