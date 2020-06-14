import styled from '@emotion/styled';
import ds from '../../theme/ds';

type Props = {
  text?: string;
  bg?: string;
  m?: string;
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
  onClick?: () => void;
  value?: string;
};
export const Button = styled.button<Props>`
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  /* できるだけボタンそのものにmarginをもたせない */
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt || '0px'};
  margin-bottom: ${(props) => props.mb || '0px'};
  margin-right: ${(props) => props.mr || '0px'};
  margin-left: ${(props) => props.ml || '0px'};
  /* /ボタンデザイン */
  &.gradation {
    background-image: linear-gradient(45deg, #ffc107 0%, #ff8b5f 100%);
    color: ${(props) => props.text};
  }
  &.primary {
    background-color: ${ds.brand('main')};
    border: none;
    color: ${ds.color('light')};
  }
  &.secondary {
    padding: 5px 15px;
    background-color: inherit;
    border: 1px solid #ccc;
    color: #ccc;
  }
  &.outlined {
    padding: 5px 15px;
    background-color: inherit;
    border: 1px solid ${ds.color('dark')};
    color: ${ds.color('dark')};
  }
  &.grey {
    background-color: #ccc;
    border: none;
    color: #ccc;
  }
  &.disabled {
    padding: 5px 15px;
    background-color: inherit;
    border: 1px solid #ccc;
    color: #ccc;
  }
  &.text {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    appearance: none;
  }
  /* サイズ */
  &.stretch {
    width: 100%;
  }
  &.small {
    padding: 4px 5px;
    font-size: 1rem;
  }
  &.large {
    padding: 10px 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02857em;
  }
  &.middle {
    width: 80%;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;
