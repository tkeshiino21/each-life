import styled from '@emotion/styled';
import ds from '../../theme/ds';

export const Label = styled.label`
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.01071em;
`;

export const SelectWrapper = styled.div`
  position: relative;
  &::before {
    position: absolute;
    top: 0.8em;
    right: 0.8em;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${ds.color('dark')};
    z-index: 1;
    pointer-events: none;
  }
`;

export const Select = styled.select<{ width?: string }>`
  outline: none;
  text-indent: 0.01px;
  text-overflow: '';
  background: none transparent;
  vertical-align: middle;
  height: 32px;
  padding: 4px 8px;
  border: 1px solid ${ds.color('dark')};
  color: ${ds.color('dark')};
  width: ${(props) => props.width || '100%'};
  border-radius: 4px;
  appearance: none;
  cursor: pointer;
`;

export const Option = styled.option`
  background-color: ${ds.color('light')};
  color: ${ds.color('dark')};
`;
