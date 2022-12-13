import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,

  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <>
    <div>
      <Button size='sm' color='primary' {...args}>
        {typeof children === 'string' && children?.length > 0
          ? children
          : 'Primary'}
      </Button>
      <Button size='sm' color='secondary' {...args}>
        {typeof children === 'string' && children?.length > 0
          ? children
          : 'Secondary'}
      </Button>
      <Button size='sm' color='default' {...args}>
        {typeof children === 'string' && children?.length > 0
          ? children
          : 'Default'}
      </Button>
    </div>
    <br />
    <div>
      <Button size='md' color='primary' {...args}>
        {typeof children === 'string' && children?.length > 0
          ? children
          : 'Primary'}
      </Button>
      <Button size='md' color='secondary' {...args}>
        {typeof children === 'string' && children?.length > 0
          ? children
          : 'Secondary'}
      </Button>
      <Button size='md' color='default' {...args}>
        {typeof children === 'string' && children?.length > 0
          ? children
          : 'Default'}
      </Button>
    </div>
    <br />
    <div>
      <Button size='lg' color='primary' {...args}>
        {typeof children === 'string' && children?.length > 0
          ? children
          : 'Primary'}
      </Button>
      <Button size='lg' color='secondary' {...args}>
        {typeof children === 'string' && children?.length > 0
          ? children
          : 'Secondary'}
      </Button>
      <Button size='lg' color='default' {...args}>
        {typeof children === 'string' && children?.length > 0
          ? children
          : 'Default'}
      </Button>
    </div>
    <br />
  </>
)

export const Filled = Template.bind({})
Filled.args = {
  variant: 'filled',
  children: '',
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  children: '',
}

export const Basic = Template.bind({})
Basic.args = {
  variant: 'basic',
  children: '',
}

export const Disabled = Template.bind({})
Disabled.args = {
  variant: 'filled',
  children: '',
  disabled: true,
}
