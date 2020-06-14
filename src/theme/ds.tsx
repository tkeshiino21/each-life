import DesignSystem from 'design-system-utils';

const ds = {
  type: {
    // font
    baseFontSize: '16px',
    sizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    serif: 'Georgia, "Times New Roman", Times, serif',
    monospace: 'Menlo, monospace',
  },
  fontWeight: {
    normal: 300,
    bold: 700,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  colors: {
    colorPalette: {
      light: {
        base: '#ffffff',
        '1': '#e5e5e5',
        '2': '#f2f2f2',
        '3': '#ededed',
        '4': '#dadada',
      },
      dark: {
        base: '#1f1f1f',
        '1': '#333333',
        '2': '#555555',
        '3': '#777777',
        '4': '#999999',
      },
      grey: {
        base: '#fafafa',
        '1': '#fafafa',
        '2': '#f5f5f5f',
        '3': '#e0e0e0',
        '4': '#bdbdbd',
        '5': '#9e9e9e',
        '6': '#757575',
        '7': '#616161',
        '8': '#424242',
        '9': '#212121',
      },
    },
    brand: {
      success: '#27a745',
      danger: '#dc3545',
      muted: '#f6f6f6',
      // "primary"
      light: '#ff58c9', // ex.) hover plain text bg color
      main: '#354171', // normal
      dark: '#aa006a',
      // mono
      white: '#fafafa',
      black: '#1f1f1f',
    },
  },

  breakpoints: {
    xs: '320px', // <number | string>,
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },

  zIndex: {
    background: -100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },

  spacing: {
    scale: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  },

  shadow: {
    1: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    2: '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    3: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    4: '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    5: '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    6: '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  },
};

export default new DesignSystem(ds);
