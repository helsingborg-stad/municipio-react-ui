/* eslint-disable no-undef */
import React from 'react'
import { AsComponentPropsWithoutRef as AsComponentProps } from '../../utils/types'

export const TEXT = {
  DEFAULT_ELEMENT: 'span',
  DEFAULT_VARIANT: 'span',
  ELEMENTS: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span',
    'small',
    'a',
    'label',
  ],
  VARIANTS: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'caption',
    'meta',
    'link',
  ],
} as const

export interface TextProps extends React.PropsWithChildren {
  as?: typeof TEXT.ELEMENTS[number]
  variant?: typeof TEXT.VARIANTS[number]
  gutterBottom?: boolean | null
  gutterTop?: boolean | null
  className?: string
  bold?: boolean | null
  italic?: boolean | null
  /**
   * @deprecated
   * To be removed in future release in favour of 'as' prop.
   */
  element?: typeof TEXT.ELEMENTS[number]
}

export const TextComponent = <
  E extends typeof TEXT.ELEMENTS[number] &
    React.ElementType = typeof TEXT.DEFAULT_ELEMENT,
>({
  as,
  children,
  variant,
  className,
  gutterTop,
  gutterBottom,
  bold,
  italic,
  element,
  ...rest
}: AsComponentProps<E, TextProps>) => {
  const Element = as || element || TEXT.DEFAULT_ELEMENT

  const elementToVariant = () =>
    TEXT.VARIANTS.includes(Element.toString() as typeof TEXT.VARIANTS[number])
      ? Element.toString()
      : TEXT.DEFAULT_VARIANT

  return (
    <Element
      className={[
        'c-typography',
        `c-typography__variant--${variant ?? elementToVariant()}`,
        ...(className ? [className] : []),
        ...(italic ? ['u-italic'] : []),
        ...(bold ? ['u-bold'] : []),
        ...(gutterTop === false ? ['u-margin__top--0'] : []),
        ...(gutterBottom === false ? ['u-margin__bottom--0'] : []),
      ].join(' ')}
      {...rest}
    >
      {children}
    </Element>
  )
}

export const Typography = TextComponent
export const Text = TextComponent
