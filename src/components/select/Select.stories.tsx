import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select as SelectComponent } from './Select'

export default {
  title: 'Components/Select',
  component: SelectComponent,
  argTypes: {},
} as ComponentMeta<typeof SelectComponent>

const SelectTemplate: ComponentStory<typeof SelectComponent> = (args) => (
  <SelectComponent
    placeholder='Select an option'
    helperText={'This is a helper text'}
    {...args}
  />
)

export const Select = SelectTemplate.bind({})
Select.args = {
  name: 'select-name',
  label: 'Select label',
  helperText: 'This is a helper text',
  options: [
    ['option-1', 'Option 1'],
    ['option-2', 'Option 2'],
    ['option-3', 'Option 3'],
  ],
  onChange: () => '',
  onBlur: () => '',
  onFocus: () => '',
}
