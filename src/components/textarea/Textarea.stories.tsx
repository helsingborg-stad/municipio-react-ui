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
  name: 'textarea-name',
  label: 'Textarea label',
  helperText: 'This is a helper text',
  rows: 4,
  resizable: false,
  onChange: () => '',
  onBlur: () => '',
  onFocus: () => '',
}
