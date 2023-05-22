import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextComponent, TEXT } from './Text'

export default {
  title: 'Components/Text',
  component: TextComponent,
  argTypes: {
    as: TEXT.ELEMENTS,
  },
} as ComponentMeta<typeof TextComponent>

const Template: ComponentStory<typeof TextComponent> = ({
  children,
  ...args
}) => <TextComponent {...args}>{children}</TextComponent>

export const Text = Template.bind({})

Text.args = {
  as: 'p',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate metus in maximus mollis.',
}
