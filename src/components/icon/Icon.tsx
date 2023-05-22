import React from 'react'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  name: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export const Icon = ({
  name,
  size = 'md',
  style,
  className,
  ...props
}: Props): JSX.Element => (
  <i
    className={[
      'c-icon',
      `c-icon--size-${size}`,
      'material-icons',
      ...(className ? [className] : []),
    ].join(' ')}
    translate='no'
    style={{
      userSelect: 'none',
      ...style,
    }}
    {...props}
  >
    {name}
  </i>
)
