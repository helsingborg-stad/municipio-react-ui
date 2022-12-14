import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Typography as TypographyComponent } from '../typography/Typography'

export default {
  title: 'Components/Typography',
  component: TypographyComponent,
  argTypes: {},
} as ComponentMeta<typeof TypographyComponent>

const Template: ComponentStory<typeof TypographyComponent> = ({
  children,
  ...args
}) => <TypographyComponent {...args}>{children}</TypographyComponent>

export const Typography = Template.bind({})
Typography.args = {
  variant: 'h1',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate metus in maximus mollis.',
}
