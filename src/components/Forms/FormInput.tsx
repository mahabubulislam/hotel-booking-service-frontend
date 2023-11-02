'use client'

import { getErrorMessageByPropertyName } from '@/utils/schema.validator'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
interface IInput {
  name: string
  type?: string
  className?: string
  value?: string | string[] | undefined
  id?: string
  placeholder?: string
  validation?: object
  label?: string
  required?: boolean
}

const FormInput = ({
  name,
  type,
  value,
  id,
  placeholder,
  className,
  validation,
  label,
  required
}: IInput) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const errorMessage = getErrorMessageByPropertyName(errors, name)
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div>
      <div className='flex gap-2 items-center'>
        <label
          htmlFor={name}
          className='block mb-2 text-sm font-medium text-white '>
          {label ? label : null}
        </label>
        {required ? <sup className='text-danger text-sm'>*</sup> : null}
      </div>

      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === 'password' ? (
            <div className='relative'>
              <input
                type={showPassword ? 'text' : type}
                id={id}
                placeholder={placeholder}
                className={`${
                  className ? className : ''
                }  border border-gray-300 text-gray-400 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 bg-gray-700`}
                {...field}
                value={value ? value : field.value}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-2 top-3 cursor-pointer'>
                {showPassword ? (
                  <EyeSlashIcon width={20} color='white' />
                ) : (
                  <EyeIcon width={20} color='white' />
                )}
              </span>
            </div>
          ) : (
            <input
              type={type}
              id={id}
              placeholder={placeholder}
              className={`${
                className ? className : ''
              }  border border-gray-300 text-gray-400 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 bg-gray-700`}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />
      <small className='text-danger'>{errorMessage}</small>
    </div>
  )
}

export default FormInput
