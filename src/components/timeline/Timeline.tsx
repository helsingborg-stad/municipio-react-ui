/* eslint-disable no-undef */
import React from 'react'
import { Typography } from '../typography/Typography'
import './timeline.scss' // TODO: Move Timeline styles to styleguide

const Timeline = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element => (
  <div {...props} className='timeline timeline--neutral'>
    {children}
  </div>
)

const TimelineBody = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element => (
  <div {...props} className='timeline__body'>
    {children}
  </div>
)

const TimelineHeader = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element => (
  <div {...props} className='timeline__header'>
    {children}
  </div>
)

const TimelineSecondary = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element => (
  <div {...props} className='timeline__secondary'>
    {children}
  </div>
)

const TimelineTitle = ({
  children,
  variant = 'h4',
  ...props
}: React.ComponentPropsWithoutRef<typeof Typography>): JSX.Element => (
  <Typography className={'timeline__title'} variant={variant} {...props}>
    {children}
  </Typography>
)

const TimelineLine = (): JSX.Element => <div className='timeline__line'></div>

const TimelineDot = (): JSX.Element => (
  <div className='timeline__dot'>
    <div className='timeline__inner-dot'></div>
  </div>
)

const TimelineConnector = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element => (
  <div {...props} className='timeline__connector'>
    {children || <TimelineDot />}
    <TimelineLine />
  </div>
)

const TimelineItem = ({
  active,
  muted,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  active?: boolean
  muted?: boolean
}): JSX.Element => (
  <div
    {...props}
    className={[
      'timeline__item',
      ...(active ? ['is-active'] : []),
      ...(muted ? ['is-muted'] : []),
    ].join(' ')}
  >
    {children}
  </div>
)

export {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineBody,
  TimelineDot,
  TimelineTitle,
  TimelineSecondary,
  TimelineLine,
  TimelineHeader,
}
