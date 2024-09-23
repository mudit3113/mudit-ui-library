export const uiBaseTheme = {
    colors: {
      primary: {
        100: '#FF5F77',
        200: '#FF4864',
        300: '#FF3150',
        400: '#FF1A3D',
        500: '#E61737',
        600: '#CC1531',
        700: '#B3122B',
        800: '#991025',
        900: '#800d1f'
      },
      secondary: {
        100: '#4DDDDD',
        200: '#33D9D8',
        300: '#1AD4D3',
        400: '#00CFCE',
        500: '#00BAB9',
        600: '#00A6A5',
        700: '#009190',
        800: '#007C7C',
        900: '#006867'
      },
      tertiary: {
        100: '#FECE70',
        200: '#FDC75C',
        300: '#FDC047',
        400: '#FDB933',
        500: '#E4A72E',
        600: '#CA9429',
        700: '#B18224',
        800: '#986F1F',
        900: '#7F5D1A'
      },
      neutral: {
        100: '#F8F8F8',
        200: '#E5E5E5',
        300: '#CBCBCB',
        400: '#B2B2B2',
        500: '#989898',
        600: '#7F7F7F',
        700: '#666666',
        800: '#4C4C4C',
        900: '#333333'
      },
      state: {
        success: '#2ECC71',
        warning: '#FFA500',
        error: '#E74C3C',
        info: '#3498DB'
      },
      screen: '#F8F8F8',
      white: '#FFFFFF',
      black: '#000000',
      background: {
        whitespace: '#FFFFFF',
        'surface-primary': '#F8F8F8',
        'surface-secondary': '#FBFBFB'
      }
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif']
    },
    fontSize: {
      h1: ['1.5rem', { lineHeight: '1.95rem' }],
      h2: ['1.375rem', { lineHeight: '1.78rem' }],
      h3: ['1.25rem', { lineHeight: '1.625rem' }],
      h4: ['1.125rem', { lineHeight: '1.462rem' }],
      h5: ['1rem', { lineHeight: '1.3rem' }],
      h6: ['0.875rem', { lineHeight: '1.13rem' }],
      subtitle1: '1.5rem',
      subtitle2: '1.25rem',
      body1: ['1rem', { lineHeight: '1.5rem' }],
      body2: ['0.875rem', { lineHeight: '1.31rem' }],
      caption: '0.75rem',
      overline: '0.75rem',
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      button: ['0.875rem', { lineHeight: '1.225rem' }],
      label: ['0.75rem', { lineHeight: '1.31rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }]
    },
    lineHeight: {
      h1: '2.5rem',
      h2: '2.25rem',
      h3: '2rem',
      h4: '1.75rem',
      h5: '1.75rem',
      h6: '1.5rem',
      subtitle1: '2rem',
      subtitle2: '1.75rem',
      body1: '1.5rem',
      body2: '1.25rem',
      caption: '1rem',
      overline: '1rem'
    },
    screens: {
      mobile: '0px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
      large: '1536px'
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      15: '0.15',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      35: '0.35',
      40: '0.4',
      45: '0.45',
      50: '0.5',
      55: '0.55',
      60: '0.6',
      65: '0.65',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      85: '0.85',
      90: '0.9',
      95: '0.95',
      100: '1'
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    outlineWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px'
    },
    outlineOffset: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px'
    },
    borderRadius: {
      0: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      full: '9999px'
    },
    gap: {
      0: '0px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem'
    },
    height: {
      0: '0px',
      3.125: '0.75rem',
      4.5: '1.125rem',
      6: '1.5rem',
      8: '2rem',
      8.5: '2.125rem',
      9: '2.25rem',
      10: '2.5rem',
      17: '4.25rem',
      80: '20rem',
      '80vh': '80vh',
      '90vh': '90vh'
    },
    maxHeight: {
      '90vh': '90vh'
    },
    width: {
      0: '0px',
      0.125: '0.03125rem',
      3.125: '0.75rem',
      4.5: '1.125rem',
      6: '1.5rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      100: '25rem',
    },
    leftN10: {
      left: '-10px'
    },
    zIndex: {
      auto: 'auto',
      10: '10'
    },
    padding: {
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem'
    },
    minWidth: {
      0: '0px',
      6: '1.5rem',
      28: '7rem',
      32: '8rem',
      36: '9rem'
    },
    px: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem'
    },
    py: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '0.6 rem'
    },
    margin: {
      2: '0.5rem'
    },
    gridTemplateRows: {
      12: 'repeat(12, 1fr)'
    },
    gridRowStart: {
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13'
    },
    gridRowEnd: {
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14'
    }
  }