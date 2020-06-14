import styled from '@emotion/styled';
import { Flex } from './Layout';

type ImageProps = {
  src: string;
};
export const Image = styled(Flex)<ImageProps>`
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
