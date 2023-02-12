export const COLORS = {
  primary: 'hsl(11deg 0% 0%)',
  primaryLight: 'hsl(11deg 0% 80%)',
  secondaryLight: 'hsl(11deg 0% 90%)',
  white: 'hsl(0deg 0% 100%)',
  gray: 'hsl(240deg 10% 50%)',
  grayLight: 'hsl(240deg 10% 65%)',
  grayTransparent: 'hsl(240deg 10% 95%)',
  red: 'red',
  primaryBackground: 'hsl(208deg 100% 98%)',
  transparent: 'transparent',
};

const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  phone: `(max-width: ${BREAKPOINTS.tabletMin}px)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin}px)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin}px)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin}px)`,
};
