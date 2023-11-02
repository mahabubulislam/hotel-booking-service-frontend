'use client'
import { ReactNode, useEffect } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
type FormConfig = {
  defaultValues?: Record<string, any>
  resolver?: any
}
type FormProps = {
  submitHandler: SubmitHandler<any>
  children: ReactNode
} & FormConfig
const Form = ({
  submitHandler,
  children,
  resolver,
  defaultValues
}: FormProps) => {
  const formConfig: FormConfig = {}

  if (!!defaultValues) formConfig['defaultValues'] = defaultValues
  if (!!resolver) formConfig['resolver'] = resolver
  const methods = useForm<FormProps>(formConfig)

  const { handleSubmit, reset } = methods
  useEffect(() => reset(defaultValues), [defaultValues, reset, methods])

  const onSubmit = (data: any) => {
    submitHandler(data)
    reset()
  }

  return (
    <FormProvider {...methods}>
      <form
        className='space-y-4 md:space-y-6'
        onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
