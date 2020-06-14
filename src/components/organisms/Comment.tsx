import React from 'react';
import styled from '@emotion/styled';
import { Wrap } from '../atoms';
import ds from '../../theme/ds';

const Bubble = styled.div`
  margin-top: 20px;
  max-width: 100%;
  font-size: 16px;
`;

const Message = styled.p`
  color: ${ds.color('dark')};
  background: 'inherit';
  border: 2px solid ${ds.color('dark', '2')};
  border-radius: 30px 30px 30px 0px;
  margin-right: 50px;
  padding: 20px;
  &.bms_right {
    float: right;
    line-height: 1.3em;
  }
`;

const Comment = () => {
  return (
    <Wrap mt="48px">
      <Bubble>
        <Message>Hello?</Message>
      </Bubble>
      <Bubble>
        <Message>Can you hear me?</Message>
      </Bubble>
    </Wrap>
  );
};

export default Comment;
