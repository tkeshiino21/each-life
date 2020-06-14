import React, { useState, FormEvent } from 'react';
import styled from '@emotion/styled';
import ds from '../../theme/ds';
import { Button } from '../atoms';

const Bubble = styled.div`
  display: inline-block;
  margin-top: 20px;
  max-width: 100%;
  font-size: 16px;
`;

const Input = styled.input`
  color: ${ds.color('dark')};
  background: 'inherit';
  border: 2px solid ${ds.color('dark', '2')};
  border-radius: 30px 30px 30px 0px; /*左下だけ尖らせて吹き出し感を出す*/
  margin-right: 50px;
  padding: 20px;
  &.bms_right {
    float: right;
    line-height: 1.3em;
  }
`;

const CommentForm = () => {
  const [comment, setComment] = useState('');
  const commentInputHandler = (e: FormEvent<HTMLInputElement>) => {
    return setComment(e.currentTarget.value);
  };

  return (
    <form>
      <Bubble>
        <Input value={comment} onChange={commentInputHandler} />
      </Bubble>
      <Button className="primary">送信</Button>
    </form>
  );
};

export default CommentForm;
