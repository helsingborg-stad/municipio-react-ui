import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card, CardBody } from './Card'

export default {
  title: 'Components/Card',
  component: Card,

  argTypes: {},
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <CardBody>This is a card</CardBody>
  </Card>
)

export const PlainText = Template.bind({})
