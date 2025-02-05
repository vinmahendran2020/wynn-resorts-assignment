
import { breakpoints } from '../tailwind.config'
import { useWindowSize } from './useWindowSize'

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
