import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Textarea as TextareaComponent } from './Textarea'

export default {
  title: 'Components/Textarea',
  component: TextareaComponent,
  argTypes: {},
} as ComponentMeta<typeof TextareaComponent>

const TextareaTemplate: ComponentStory<typeof TextareaComponent> = (args) => (
  <TextareaComponent
    placeholder='Placeholder'
    helperText={'This is a helper text'}
    {...args}
  />
)

export const Textarea = TextareaTemplate.bind({})
Textarea.args = {
  name: 'text-field',
  label: 'Text Textarea',
  helperText: 'This is a helper text',
  onChange: () => '',
  onBlur: () => '',
  onFocus: () => '',
}
