/* eslint-disable no-undef */
import React from 'react'

type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'caption'
  | 'meta'

type TypographyElements =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'small'

const VariantToElementMap: Record<TypographyVariants, TypographyElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  caption: 'span',
  meta: 'span',
}

export interface TypographyProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  variant?: TypographyVariants
  element?: TypographyElements
  gutterBottom?: boolean | null
}

const Typography = ({
  children,
  element,
  variant = 'p',
  className,
  gutterBottom,
  ...props
}: TypographyProps): JSX.Element => {
  const Element = element ?? VariantToElementMap[variant]

  return (
    <Element
      {...props}
      className={[
        'c-typography',
        `c-typography__variant--${variant}`,
        ...(className ? [className] : []),
        ...(gutterBottom === false ? ['u-margin__bottom--0'] : []),
      ].join(' ')}
    >
      {children}
    </Element>
  )
}

export { Typography }
