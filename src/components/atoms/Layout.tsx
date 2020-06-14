import styled from '@emotion/styled';
import ds from '../../theme/ds';

type Wrap = {
  p?: string;
  pt?: string;
  pb?: string;
  pr?: string;
  pl?: string;

  m?: string;
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;

  rm?: string;
  rmt?: string;
  rmb?: string;
  rmr?: string;
  rml?: string;
};

export const Wrap = styled.div<Wrap>`
  padding: ${(props) => props.p};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-right: ${(props) => props.pr};
  padding-left: ${(props) => props.pl};

  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-right: ${(props) => props.mr};
  margin-left: ${(props) => props.ml};

  @media (max-width: ${ds.bp('sm')}) {
    margin: ${(props) => props.rm};
    margin-top: ${(props) => props.rmt};
    margin-bottom: ${(props) => props.rmb};
    margin-right: ${(props) => props.rmr};
    margin-left: ${(props) => props.rml};
  }
`;

type Flex = {
  direction?: string;
  basis?: string;
  grow?: number;
  wrap?: string;
  justify?: string;
  align?: string;
  aligns?: string;
  width?: string;
  height?: string;
  flex?: any;
};
export const Flex = styled.div<Flex>`
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.direction};
  flex-basis: ${(props) => props.basis};
  flex-grow: ${(props) => props.grow};
  flex-wrap: ${(props) => props.wrap};
  justify-content: ${(props) => props.justify};
  align-content: ${(props) => props.align};
  align-items: ${(props) => props.aligns};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height};
`;

export const Box = styled.div`
  display: block;
`;
