import React, { FC, ChangeEvent } from 'react';
import styled from '@emotion/styled';
import ds from '../../theme/ds';

const TabWrapper = styled.div`
  margin-top: 50px;
  padding-bottom: 40px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 700px;
`;

const TabItem = styled.button`
  width: calc(100% / 3);
  height: 50px;
  border-radius: 4px 4px 0px 0px;
  border-bottom: 1px solid ${ds.brand('main')};
  background-color: ${ds.color('light', '4')};
  line-height: 50px;
  font-size: 16px;
  text-align: center;
  color: ${ds.color('dark', '2')};
  display: block;
  float: left;
  text-align: center;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.75;
  }
  &.active {
    color: ${ds.color('light')};
    background-color: ${ds.brand('main')};
  }
`;

type Tab = {
  onClick: any;
  active: string;
};

const Tab: FC<Tab> = ({ onClick, active }) => {
  return (
    <TabWrapper>
      <TabItem
        className={active === '1' ? 'active' : 'passive'}
        onClick={onClick}
        value="1"
      >
        EVENT
      </TabItem>
      <TabItem
        className={active === '2' ? 'active' : 'passive'}
        onClick={onClick}
        value="2"
      >
        MEMBER
      </TabItem>
      <TabItem
        className={active === '3' ? 'active' : 'passive'}
        onClick={onClick}
        value="3"
      >
        FORUM
      </TabItem>
    </TabWrapper>
  );
};

export default Tab;
