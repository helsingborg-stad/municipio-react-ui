/* eslint-disable no-undef */
import React from 'react'

const Card = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element => (
  <div
    {...props}
    className={['c-card', ...(className ? [className] : [])].join(' ')}
  >
    {children}
  </div>
)

const CardBody = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element => (
  <div
    {...props}
    className={['c-card__body', ...(className ? [className] : [])].join(' ')}
  >
    {children}
  </div>
)

const CardHeader = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element => (
  <div
    {...props}
    className={['c-card__header', ...(className ? [className] : [])].join(' ')}
  >
    {children}
  </div>
)

const CardFooter = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element => (
  <div
    {...props}
    className={['c-card__footer', ...(className ? [className] : [])].join(' ')}
  >
    {children}
  </div>
)

export { Card, CardBody, CardHeader, CardFooter }
