export default {
  grid: {
    container: '1600px',
    gutter: '2rem'
  },
  border: {
    radius: '4px'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '0.75rem', //12px
      small: '0.875rem', //14px
      medium: '1rem', //16px
      large: '1.125rem', //18px
      xlarge: '1.25rem', //20px
      xxlarge: '1.75rem', //28px
      huge: '3.25rem' //52px
    }
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  spacings: {
    xxsmall: '0.5rem',
    xsmall: '1rem',
    small: '1.5rem',
    medium: '2rem',
    large: '2.5rem',
    xlarge: '3rem',
    xxlarge: '3.5rem'
  },
  colors: {
    primary: '#6c9bcf',
    secondary: '#3CD3C1',
    success: '#1b9c85',
    warning: '#f7d060',
    mainBg: '#06092B',
    lightBg: '#f6f6f9',
    white: '#677483',
    darkVariant: '#FAFAFA',
    black: '#363949',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    danger: '#ff0060',
    red: '#FF6347',
    green: '#68bb79',
    grey: '#b7b7b7'
  }
} as const
