import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Icon } from './Icon'

export default {
  title: 'Components/Icon',
  component: Icon,

  argTypes: {},
} as ComponentMeta<typeof Icon>

export const MaterialIcons: ComponentStory<typeof Icon> = (args) => (
  <>
    <Icon name='email' />
    <Icon name='phone' />
    <Icon name='apartment' />
    <Icon name='account_circle' />
    <Icon name='diamond' />
  </>
)

export const Sizes: ComponentStory<typeof Icon> = (args) => (
  <>
    <Icon size='sm' name='diamond' />
    <Icon size='md' name='diamond' />
    <Icon size='lg' name='diamond' />
    <Icon size='xl' name='diamond' />
    <Icon size='xxl' name='diamond' />
  </>
)
