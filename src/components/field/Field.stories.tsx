import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Field } from './Field'

export default {
  title: 'Components/Field',
  component: Field,
  argTypes: {},
} as ComponentMeta<typeof Field>

const FieldTemplate: ComponentStory<typeof Field> = (args) => (
  <Field
    placeholder='Placeholder'
    helperText={'This is a helper text'}
    {...args}
  />
)

export const Text = FieldTemplate.bind({})
Text.args = {
  name: 'text-field',
  label: 'Text Field',
  type: 'text',
  helperText: 'This is a helper text',
  onChange: () => '',
  onBlur: () => '',
  onFocus: () => '',
}

export const Number = FieldTemplate.bind({})
Number.args = {
  name: 'number-field',
  label: 'Number Field',
  type: 'number',
  placeholder: '',
  helperText: 'This is a helper text',
  onChange: () => '',
  onBlur: () => '',
  onFocus: () => '',
}

export const Email = FieldTemplate.bind({})
Email.args = {
  name: 'email-field',
  label: 'Email Field',
  placeholder: 'mail@placeholder.com',
  type: 'email',
  helperText: 'This is a helper text',
  onChange: () => '',
  onBlur: () => '',
  onFocus: () => '',
}

export const Phone = FieldTemplate.bind({})
Phone.args = {
  name: 'phone-field',
  label: 'Phone Field',
  placeholder: '+46733221122',
  type: 'phone',
  helperText: 'This is a helper text',
  onChange: () => '',
  onBlur: () => '',
  onFocus: () => '',
}

export const Password = FieldTemplate.bind({})
Password.args = {
  name: 'password-field',
  label: 'Password Field',
  placeholder: '',
  type: 'password',
  helperText: 'This is a helper text',
  onChange: () => '',
  onBlur: () => '',
  onFocus: () => '',
}

export const Search = FieldTemplate.bind({})
Search.args = {
  name: 'search-field',
  label: 'Search Field',
  placeholder: 'Enter search',
  type: 'search',
  helperText: 'This is a helper text',
  onChange: () => '',
  onBlur: () => '',
  onFocus: () => '',
}
