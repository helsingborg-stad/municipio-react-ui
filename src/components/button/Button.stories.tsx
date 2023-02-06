import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
)

export const Filled = Template.bind({})
Filled.args = {
  color: 'primary',
  variant: 'filled',
  children: 'Press me',
  size: 'md',
}

export const Outlined = Template.bind({})
Outlined.args = {
  color: 'primary',
  variant: 'outlined',
  children: 'Outlined',
  size: 'md',
}

export const Basic = Template.bind({})
Basic.args = {
  color: 'primary',
  variant: 'basic',
  children: 'Basic',
  size: 'md',
}

export const Disabled = Template.bind({})
Disabled.args = {
  color: 'primary',
  variant: 'filled',
  children: 'Disabled',
  disabled: true,
  size: 'md',
}

export const AsHTMLAnchorElement = Template.bind({})
AsHTMLAnchorElement.args = {
  color: 'primary',
  variant: 'basic',
  children: 'Basic',
  size: 'md',
  as: 'a',
  href: '#',
}
