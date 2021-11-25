import { extendTheme } from 'native-base'

const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#e2f1ff',
      100: '#b8d1fb',
      200: '#8db2f2',
      300: '#6094eb',
      400: '#3575e5',
      500: '#1d5ccb',
      600: '#14479f',
      700: '#0b3372',
      800: '#021f47',
      900: '#000a1d',
    },
  },
})

export default theme
