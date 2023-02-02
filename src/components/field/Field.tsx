/* eslint-disable no-undef */
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from 'react'

export interface FieldProps {
  name: string
  value?: string
  label?: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  type?: HTMLInputTypeAttribute
  error?: boolean
  valid?: boolean
  helperText?: string | JSX.Element
  readOnly?: boolean
  required?: boolean
  placeholder?: string
  inputProps?: React.ComponentPropsWithoutRef<'input'>
}

const Field = ({
  value,
  onChange,
  onBlur,
  onFocus,
  label,
  name,
  type,
  error,
  valid,
  helperText,
  required,
  readOnly: readOnly,
  placeholder = '',
  inputProps = {},
  ...props
}: FieldProps): JSX.Element => {
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
        <input
          id={name}
          aria-label={label}
          aria-required={required ? 'true' : 'false'}
          {...inputProps}
          {...(value ? { value } : {})}
          {...(readOnly ? { readOnly } : {})}
          {...(placeholder ? { placeholder } : {})}
          {...(type ? { type } : {})}
          {...(required ? { required } : {})}
          {...(onBlur ? { onBlur } : {})}
          {...(onFocus ? { onFocus } : {})}
          onChange={onChange}
          name={name}
        />
      </div>
      {helperText ? <div className='c-field__helper'>{helperText}</div> : null}
    </div>
  )
}

export { Field }
