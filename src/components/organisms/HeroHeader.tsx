import React from 'react';
import styled from '@emotion/styled';
import ds from '../../theme/ds';

const HeroHeader = () => {
  return (
    <TitleLogo>
      EACH
      <br />
      LIFE
      <br />
      <span style={{ color: ds.brand('main') }}>CRITICAL</span>
    </TitleLogo>
  );
};

const TitleLogo = styled.h1`
  text-align: center;
  font-size: 64px;
  line-height: 1.75em;
  font-weight: bold;
  letter-spacing: 0.25em;
  margin-left: 0.25em;
  @media (max-width: ${ds.bp('sm')}) {
    font-size: 32px;
  }
`;

export default HeroHeader;
