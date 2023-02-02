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

interface CommonProps {
  color?: 'default' | 'primary' | 'secondary'
  variant?: 'filled' | 'basic' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  href?: string
}

type ButtonAsButton = CommonProps &
  Omit<React.ComponentPropsWithoutRef<'button'>, keyof CommonProps> & {
    as?: 'button'
  }

type ButtonAsAnchor = CommonProps &
  Omit<React.ComponentPropsWithoutRef<'a'>, keyof CommonProps> & {
    as?: 'anchor'
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const Button = ({
  className,
  children,
  color = 'default',
  size = 'md',
  variant = 'filled',
  ...props
}: ButtonProps): JSX.Element => {
  const addClassNames = (baseClass: string, ...overrides: string[]): string =>
    [
      baseClass,
      propsToClassNamesMap.size[size],
      propsToClassNamesMap.variant[variant],
      propsToClassNamesMap.variant[variant] + propsToClassNamesMap.color[color],
      ...(className ? [className] : []),
      ...overrides,
    ].join(' ')

  if (props?.as === 'anchor') {
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
        e.preventDefault()
        return props.onClick ? props.onClick(e) : null
      }}
      {...props}
    >
      <span className='c-button__label'>
        <span className='c-button__label-text'>{children}</span>
      </span>
    </button>
  )
}

export { Button }
