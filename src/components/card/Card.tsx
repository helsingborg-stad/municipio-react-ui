/* eslint-disable no-undef */
import React from 'react'

const Card = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element => (
  <div {...props} className='c-card'>
    {children}
  </div>
)

const CardBody = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element => (
  <div {...props} className='c-card__body'>
    {children}
  </div>
)

export { Card, CardBody }
