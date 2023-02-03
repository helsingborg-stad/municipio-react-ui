import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '../button/Button'
import { Icon } from '../icon/Icon'
import { Typography } from '../typography/Typography'

import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineItem,
  TimelineTitle,
} from './Timeline'

export default {
  title: 'Components/Timeline',
  component: Timeline,

  argTypes: {},
} as ComponentMeta<typeof Timeline>

const Template: ComponentStory<typeof Timeline> = (args) => {
  const events = [
    {
      title: 'Beslut',
      date: '12 Maj 2023',
    },
    {
      title: 'Komplettera information',
      date: '12 Maj 2022',
    },
    {
      title: 'Ansökan mottagen',
      date: '12 Maj 2022',
    },
  ]

  return (
    <Timeline {...args}>
      {events.map(({ title, date }, i) => (
        <TimelineItem
          key={`${title}`}
          {...(i === 0 ? { active: true } : { muted: true })}
        >
          <TimelineConnector />
          <TimelineBody>
            <TimelineHeader>
              <TimelineTitle>{title}</TimelineTitle>
              <Typography variant='meta'>{date}</Typography>
            </TimelineHeader>
          </TimelineBody>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

const Template2: ComponentStory<typeof Timeline> = (args) => {
  type ActionableItems = {
    url: string
    text: string
  }[]
  const events = [
    {
      title: 'Beslut',
      date: '12 Maj 2023',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      actions: [
        {
          url: '#',
          text: 'Action Link',
        },
        {
          url: '#',
          text: 'Action Link 2',
        },
      ] as ActionableItems,
    },
    {
      title: 'Komplettera information',
      date: '12 Maj 2022',
      actions: [] as ActionableItems,
    },
    {
      title: 'Ansökan mottagen',
      date: '12 Maj 2022',
      actions: [] as ActionableItems,
    },
  ]

  return (
    <Timeline {...args}>
      {events.map(({ title, date, description, actions }, i) => (
        <TimelineItem
          key={`${title}`}
          {...(i === 0 ? { active: true } : { muted: true })}
        >
          <TimelineConnector />
          <TimelineBody>
            <TimelineHeader>
              <div className='o-grid u-justify-content--center u-align-items--center'>
                <div className='o-grid-auto'>
                  <TimelineTitle>{title}</TimelineTitle>
                  {description ? (
                    <Typography variant='meta'>{description}</Typography>
                  ) : null}

                  {actions.map(({ text, url }, i) => (
                    <Button
                      key={`${text}-${i}`}
                      as='anchor'
                      href={url}
                      variant='basic'
                    >
                      {text}
                    </Button>
                  ))}
                </div>
                <div className='o-grid-fit u-align-self--start'>
                  <Typography variant='meta'>{date}</Typography>
                </div>
              </div>
            </TimelineHeader>
          </TimelineBody>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export const Example = Template.bind({})
export const Example2 = Template2.bind({})
