import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';
import ds from '../../theme/ds';

export const Label = styled.label`
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.01071em;
`;

export const Input = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  width: 100%;
  &.outlined {
    border: 1px solid ${ds.color('dark', '4')};
    background: ${ds.color('light')};
    text-indent: 2px;
    border-radius: 4px;
  }

  &.underlined {
    border-bottom: 1px solid black;
  }
`;

export const Textarea = styled.textarea`
  height: 200px;
  width: 100%;
  &.outlined {
    outline: none;
    background-color: white;
    border: 1px solid black;
    border-radius: 4px;
  }
  &.underlined {
    border-bottom: 1px solid black;
  }
`;
