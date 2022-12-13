import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Field } from './Field'

export default {
  title: 'Components/Field',
  component: Field,
  argTypes: {},
} as ComponentMeta<typeof Field>

const FieldTemplate: ComponentStory<typeof Field> = (args) => (
  <Field
    onChange={() => ''}
    placeholder='Placeholder'
    helperText={'This is a helper text'}
    value=''
    {...args}
  />
)

export const Text = FieldTemplate.bind({})
Text.args = {
  name: 'text-field',
  label: 'Text Field',
  type: 'text',
  helperText: '',
  value: '',
}

export const Number = FieldTemplate.bind({})
Number.args = {
  name: 'number-field',
  label: 'Number Field',
  type: 'number',
  placeholder: '',
  helperText: '',
  value: '',
}

export const Email = FieldTemplate.bind({})
Email.args = {
  name: 'email-field',
  label: 'Email Field',
  placeholder: 'mail@placeholder.com',
  type: 'email',
  helperText: '',
  value: '',
}

export const Phone = FieldTemplate.bind({})
Phone.args = {
  name: 'phone-field',
  label: 'Phone Field',
  placeholder: '+46733221122',
  type: 'phone',
  helperText: '',
  value: '',
}

export const Password = FieldTemplate.bind({})
Password.args = {
  name: 'password-field',
  label: 'Password Field',
  placeholder: '',
  type: 'password',
  helperText: '',
  value: '',
}

export const Search = FieldTemplate.bind({})
Search.args = {
  name: 'search-field',
  label: 'Search Field',
  placeholder: 'Enter search',
  type: 'search',
  helperText: '',
  value: '',
}
