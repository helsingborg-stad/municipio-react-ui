export const colors = {
  primary: {
    base: 'var(--color-primary, #ae0b05)',
    dark: 'var(--color-primary-dark, #770000)',
    light: 'var(--color-primary-light, #e84c31)',
    dimmed: 'var(--color-primary-dimmed, var(--color-primary-dark, #770000))',
    alpha:
      'var(--color-primary-alpha, rgba(var(--color-primary, #ae0b05), 0.76))',
    alphaDimmed: 'var(--color-primary-alpha-dimmed, rgba(119, 0, 0, 0.76))',
    darkAlpha: 'var(--color-primary-dark-alpha, rgba(119, 0, 0, 0.76))',
    transparent: 'var(--color-primary-alpha, rgba(174, 11, 5, 0.9))',
    alphaHalf: 'var(--color-primary-alpha-half, rgba(119, 0, 0, 0.5))',
    contrasting:
      'var(--color-primary-contrasting, var(--color-white, #ffffff))',
  },
  secondary: {
    base: 'var(--color-secondary, #ec6701)',
    dark: 'var(--color-secondary-dark, #b23700)',
    light: 'var(--color-secondary-light, #ff983e)',
    dimmed:
      'var(--color-secondary-dimmed, var(--color-secondary-dark, #b23700))',
    alpha: 'var(--color-secondary-alpha, rgba(236, 103, 1, 0.76))',
    alphaDimmed: 'var(--color-secondary-alpha-dimmed, rgba(178, 55, 0, 0.24))',
    contrasting:
      'var(--color-secondary-contrasting, var(--color-white, #ffffff))',
  },
  complementary: {
    base: 'var(--color-complementary, #dec2c2)',
    light: 'var(--color-complementary-light, #f0dbd9)',
    lighter: 'var(--color-complementary-lighter, #f5e4e3)',
    lightest: 'var(--color-complementary-lightest, #faeeec)',
  },
  mono: {
    default: 'var(--color-default, #f5f5f5)',
    black: 'var(--color-black, #000000)',
    blackAlpha: 'var(--color-black-alpha, rgba(0, 0, 0, 0.55))',
    blackAlphaX2: 'var(--color-black-alpha-x2, rgba(0, 0, 0, 0.1))',
    darkest: 'var(--color-darkest, #3d3d3d)',
    darker: 'var(--color-darker, #565656)',
    dark: 'var(--color-dark, #707070)',
    light: 'var(--color-light, #a3a3a3)',
    lighter: 'var(--color-lighter, #e5e5e5)',
    lightest: 'var(--color-lightest, #fcfcfc)',
    white: 'var(--color-white, #ffffff)',
  },
  text: {
    heading:
      'var(--color-heading, var(--color-base, rgba(var(--color-black, #000000), 0.96)) rgba(var(--color-black, #000000), 0.96))',
    body: 'var(--color-body, var(--color-base, rgba(var(--color-black, #000000), 0.96)) rgba(var(--color-black, #000000), 0.96))',
    success: 'var(--color-success-text, var(--color-black, #000000))',
    danger: 'var(--color-danger-text, var(--color-white, #ffffff))',
    info: 'var(--color-info-text, var(--color-white, #ffffff))',
    warning: 'var(--color-warning-text, var(--color-black, #000000))',
  },
  background: {
    body: 'var(--color-body-background, var(--color-default, #f5f5f5))',
  },
  link: {
    default: 'var(--color-link, var(--color-primary-dark, #770000))',
    hover: 'var(--color-link-hover, var(--color-primary, #ae0b05))',
    active: 'var(--color-link-active, var(--color-primary, #ae0b05))',
    visited: 'var(--color-link-visited, var(--color-black, #000000))',
    visitedHover:
      'var(--color-link-visited-hover, var(--color-primary-dark, #770000))',
  },
  state: {
    success: 'var(--color-success, #91d736)',
    successDark: 'var(--color-success-dark, #91d736)',
    successLight: 'var(--color-success-light, #91d736)',
    successContrasting:
      'var(--color-success-contrasting, var(--color-black, #000000))',
    danger: 'var(--color-danger, #d73740)',
    dangerDark: 'var(--color-danger-dark, #d73740)',
    dangerLight: 'var(--color-danger-light, #d73740)',
    dangerContrasting:
      'var(--color-danger-contrasting, var(--color-white, #ffffff))',
    info: 'var(--color-info, #3d3d3d)',
    infoDark: 'var(--color-info-dark, #3d3d3d)',
    infoLight: 'var(--color-info-light, #3d3d3d)',
    infoContrasting:
      'var(--color-info-contrasting, var(--color-white, #ffffff))',
    warning: 'var(--color-warning, #efbb21)',
    warningDark: 'var(--color-warning-dark, #efbb21)',
    warningLight: 'var(--color-warning-light, #efbb21)',
    warningContrasting:
      'var(--color-warning-contrasting, var(--color-black, #000000))',
  },
}
