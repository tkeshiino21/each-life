import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Wrap, Text } from '../../atoms';
import ds from '../../../theme/ds';

const Container = styled.div`
  display: block;
  width: 72vw;
  text-align: right;
  margin-top: 64px;
`;

const Footer: FC = () => {
  return (
    <Container>
      <Wrap mr="24px" mt="24px">
        <Text color={ds.color('grey', '3')}>DEV:TAKESHI</Text>
      </Wrap>
    </Container>
  );
};

export default Footer;
