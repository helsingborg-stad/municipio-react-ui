/* eslint-disable no-undef */
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from 'react'

export interface TextareaProps {
  name: string
  value?: string
  label?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement>
  onFocus?: FocusEventHandler<HTMLTextAreaElement>

  error?: boolean
  valid?: boolean
  helperText?: string | JSX.Element
  readOnly?: boolean
  required?: boolean
  placeholder?: string
  textareaProps?: React.ComponentPropsWithoutRef<'textarea'>
}

const Textarea = ({
  value,
  onChange,
  onBlur,
  onFocus,
  label,
  name,
  error,
  valid,
  helperText,
  required,
  readOnly: readOnly,
  placeholder = '',
  textareaProps = {},
  ...props
}: TextareaProps): JSX.Element => {
  const classNames = [
    'c-field',
    ...(error ? ['is-invalid'] : []),
    ...(valid ? ['is-valid'] : []),
    ...(readOnly ? ['c-field--readonly'] : []),
  ].join(' ')

  return (
    <div {...props} className={classNames}>
      {label && (
        <label className='c-field__label' htmlFor={name}>
          {label}
        </label>
      )}
      <div className='c-field__inner'>
        <textarea
          name={name}
          id={name}
          aria-label={label}
          aria-required={required ? 'true' : 'false'}
          {...textareaProps}
          {...(value ? { value } : {})}
          {...(readOnly ? { readOnly } : {})}
          {...(placeholder ? { placeholder } : {})}
          {...(required ? { required } : {})}
          {...(onBlur ? { onBlur } : {})}
          {...(onFocus ? { onFocus } : {})}
          {...(onChange ? { onChange } : {})}
        />
      </div>
      {helperText ? <div className='c-field__helper'>{helperText}</div> : null}
    </div>
  )
}

export { Textarea }
