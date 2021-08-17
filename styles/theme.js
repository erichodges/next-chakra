import { createBreakpoints } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

export const breakpoints = createBreakpoints({
  '2xl': '96em',
  lg: '62em',
  md: '48em',
  sm: '30em',
  xl: '80em',
});

export const customTheme = extendTheme({
  colors: {
    test: {
      700: '#2a69ac',
      800: '#153e75',
      900: '#1a365d',
    },
  },
});
