/* eslint-disable no-undef */
import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import './textarea.scss' // TODO: Move textarea styles to styleguide

export interface TextareaProps {
  name: string
  error?: boolean
  valid?: boolean
  helperText?: string | JSX.Element
  label?: string
  value?: string
  rows?: number
  maxlength?: number
  resizable?: boolean
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement>
  onFocus?: FocusEventHandler<HTMLTextAreaElement>
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
  rows,
  maxlength,
  resizable = false,
  readOnly: readOnly,
  placeholder = '',
  textareaProps = {},
  ...props
}: TextareaProps): JSX.Element => {
  const classNames = [
    'c-field',
    'c-field--textarea',
    ...(error ? ['is-invalid'] : []),
    ...(valid ? ['is-valid'] : []),
    ...(readOnly ? ['c-field--readonly'] : []),
    ...(resizable ? ['c-field--resizable'] : []),
  ].join(' ')

  return (
    <div {...props} className={classNames}>
      {label && (
        <label className='c-field__label' htmlFor={name}>
          {label}{' '}
          {required ? (
            <span className='u-color__text--danger' aria-hidden='true'>
              *
            </span>
          ) : null}
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
          {...(rows ? { rows } : {})}
          {...(maxlength ? { maxlength } : {})}
        />
      </div>
      {helperText ? <div className='c-field__helper'>{helperText}</div> : null}
    </div>
  )
}

export { Textarea }
