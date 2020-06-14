import React from 'react';
import styled from '@emotion/styled';
import { MdArrowForward } from 'react-icons/md';
import PageLayout from '../organisms/layout/PageLayout';
import {
  Heading,
  Wrap,
  Flex,
  Label,
  Input,
  Button,
  StyledLink,
} from '../atoms';

const CenterContainer = styled.div`
  display: flex;
  height: 86vh;
  margin: auto;
`;

const CenterWrapper = styled.div`
  margin: auto;
`;

const Signup = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mr="120px" style={{ minHeight: '72vh' }}>
        <CenterContainer>
          <CenterWrapper>
            <div style={{ width: '500px' }}>
              <Heading
                className="h1"
                proximity="0px"
                style={{ fontFamily: 'sans-serif' }}
              >
                Signup
              </Heading>
              <form>
                <Wrap mt="32px">
                  <Label style={{ display: 'block' }}>名前</Label>
                  <Input style={{ height: '32px', width: '500px' }} />
                </Wrap>
                <Wrap mt="32px">
                  <Label style={{ display: 'block' }}>メールアドレス</Label>
                  <Input style={{ height: '32px', width: '500px' }} />
                </Wrap>
                <Wrap mt="48px">
                  <Button className="primary large" style={{ width: '500px' }}>
                    新規登録
                  </Button>
                </Wrap>
              </form>
              <Wrap mt="32px">
                <Flex justify="flex-end">
                  <StyledLink to="/login">
                    <Button className="text" style={{ textAlign: 'right' }}>
                      ログインに切り替え
                      <MdArrowForward />
                    </Button>
                  </StyledLink>
                </Flex>
              </Wrap>
            </div>
          </CenterWrapper>
        </CenterContainer>
      </Wrap>
    </PageLayout>
  );
};

export default Signup;
