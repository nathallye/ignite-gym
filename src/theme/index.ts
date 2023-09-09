// https://docs.nativebase.io/next/customizing-theme#page-title
// https://docs.nativebase.io/next/default-theme

import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    green: {
      500: '#00B37E',
      700: '#00875F',
    },
    gray: {
      100: '#E1E1E6',
      200: '#C4C4CC',
      300: '#7C7C8A',
      400: '#323238',
      500: '#29292E',
      600: '#202024',
      700: '#121214'
    },
    white: '#FFFFFF',
    red: {
      500: '#F75A68'
    }
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148
  }
});