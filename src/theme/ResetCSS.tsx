import React from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/core';
import ds from './ds';

const ResetCSS = () => (
  <Global
    styles={css`
      ${emotionReset}

      *,*::after, *::before {
        list-style: none;
        margin: 0px;
        background: ${ds.brand('white')};
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, 'Helvetica Neue', sans-serif;
      }
    `}
  />
);

export default ResetCSS;
