
import { useWindowSize } from './useWindowSize'

const breakpoints = {
  xs: { min: '0px', max: '639px' },
  sm: '640px',
  md: '768px',
  lg: '961px',
  xl: '1150px',
  '2xl': '1440px',
  '3xl': '1740px',
  '4xl': '2200px',
}

const BREAKPOINTS = {
  SM: parseInt(breakpoints.sm),
  MD: parseInt(breakpoints.md),
  LG: parseInt(breakpoints.lg),
  XL: parseInt(breakpoints.xl),
  XS: parseInt(breakpoints.xs.max),

}
export const useBreakpoints = () => {
  const { width } = useWindowSize()

  // Calculate the screen size categories
  const isLargeScreen = width && width >= BREAKPOINTS.LG && width < BREAKPOINTS.XL
  const isMediumScreen = width && width >= BREAKPOINTS.MD && width < BREAKPOINTS.LG
  const isSmallScreen = width && width > BREAKPOINTS.SM && width < BREAKPOINTS.MD
  const isMobileScreen = width && width <= BREAKPOINTS.SM

  // Calculate minimum sizes
  const isAtLeastLarge = width && width >= BREAKPOINTS.LG
  const isAtLeastMedium = width && width >= BREAKPOINTS.MD
  const isAtLeastSmall = width && width >= BREAKPOINTS.SM

  return {
    isAtLeastLarge,
    isAtLeastMedium,
    isAtLeastSmall,
    isLargeScreen,
    isMobileScreen,
    isMediumScreen,
    isSmallScreen,
  }
}
