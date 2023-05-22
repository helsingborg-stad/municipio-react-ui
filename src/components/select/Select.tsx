/* eslint-disable no-undef */
import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { Icon } from '../icon/Icon'

export interface SelectProps {
  name: string
  options: [string][] | [string, string][] | []
  value?: string
  label?: string
  onChange?: ChangeEventHandler<HTMLSelectElement>
  onBlur?: FocusEventHandler<HTMLSelectElement>
  onFocus?: FocusEventHandler<HTMLSelectElement>
  error?: boolean
  valid?: boolean
  helperText?: string | JSX.Element
  readOnly?: boolean
  required?: boolean
  placeholder?: string
  selectProps?: React.ComponentPropsWithoutRef<'select'>
}

const Select = ({
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
  placeholder = 'Select an option',
  selectProps = {},
  options = [],
  ...props
}: SelectProps): JSX.Element => {
  const classNames = [
    'c-field',
    'c-select',
    'c-select--md',
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
      <div className='u-position--relative'>
        <div className='c-field__inner'>
          <select
            id={name}
            name={name}
            aria-label={label}
            aria-required={required ? 'true' : 'false'}
            {...selectProps}
            {...(value ? { value } : {})}
            {...(readOnly ? { readOnly } : {})}
            {...(placeholder ? { placeholder } : {})}
            {...(required ? { required } : {})}
            {...(onBlur ? { onBlur } : {})}
            {...(onFocus ? { onFocus } : {})}
            {...(onChange ? { onChange } : {})}
          >
            {placeholder ? (
              <option
                className='c-select__option c-select__option--placeholder'
                value={''}
                {...(!value || value === '' ? { selected: true } : {})}
                {...(required ? { disabled: true } : {})}
              >
                {placeholder}
              </option>
            ) : null}

            {options.map(([value, label]) => (
              <option
                key={`select-${name}-option-${value}`}
                className='c-select__option'
                value={value}
              >
                {label ?? value}
              </option>
            ))}
          </select>
          <div className='c-select_focus-styler u-level-top'></div>
          <Icon name='expand_more' className='c-select__icon' />
        </div>
        {helperText ? (
          <div className='c-field__helper'>{helperText}</div>
        ) : null}
      </div>
    </div>
  )
}

export { Select }
