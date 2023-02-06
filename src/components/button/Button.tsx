import React from 'react'

const propsToClassNamesMap = {
  size: {
    sm: 'c-button--sm',
    md: 'c-button--md',
    lg: 'c-button--lg',
  },
  variant: {
    filled: 'c-button__filled',
    basic: 'c-button__basic',
    outlined: 'c-button__outlined',
  },
  color: {
    primary: '--primary',
    secondary: '--secondary',
    default: '--default',
  },
  disabled: 'is-disabled',
}

export type CommonButtonProps = {
  color?: 'default' | 'primary' | 'secondary'
  variant?: 'filled' | 'basic' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  as?: string
  disabled?: boolean
}

export type ButtonAsButton = CommonButtonProps &
  React.ComponentPropsWithoutRef<'button'> & {
    as?: 'button'
    href?: undefined
  }
export type ButtonAsAnchor = CommonButtonProps &
  React.ComponentPropsWithoutRef<'a'> & {
    as?: 'a'
    href?: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

const Button: {
  (props: ButtonAsButton): JSX.Element
  (props: ButtonAsAnchor): JSX.Element
} = ({
  className,
  children,
  color = 'default',
  size = 'md',
  variant = 'filled',
  ...props
}: ButtonProps) => {
  const addClassNames = (baseClass: string, ...overrides: string[]): string =>
    [
      baseClass,
      propsToClassNamesMap.size[size],
      propsToClassNamesMap.variant[variant],
      propsToClassNamesMap.variant[variant] + propsToClassNamesMap.color[color],
      ...(className ? [className] : []),
      ...overrides,
    ].join(' ')

  if (props?.as === 'a' || props?.href) {
    return (
      <a className={addClassNames('c-button')} {...props}>
        <span className='c-button__label'>
          <span className='c-button__label-text'>{children}</span>
        </span>
      </a>
    )
  }

  return (
    <button
      className={addClassNames('c-button')}
      onClick={(e) => {
        const { onClick } = props as ButtonAsButton
        e.preventDefault()
        return onClick ? onClick(e) : null
      }}
      {...(props as ButtonAsButton)}
    >
      <span className='c-button__label'>
        <span className='c-button__label-text'>{children}</span>
      </span>
    </button>
  )
}

export { Button }
