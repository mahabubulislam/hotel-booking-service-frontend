'use client'
import Form from '@/components/Forms/Form'
import FormInput from '@/components/Forms/FormInput'
import Link from 'next/link'
import PrimaryButton from '../ui/PrimaryButton'
const LoginForm = () => {
  const onSubmit = async (data: any) => {}
  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen'>
      <div className='w-full  rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]  md:mt-0 sm:max-w-lg py-5'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
            Login to your account
          </h1>
          <Form submitHandler={onSubmit}>
            <FormInput
              required
              name='email'
              id='email'
              type='email'
              placeholder='name@example.com'
              label='Email'
            />
            <FormInput
              required
              name='password'
              id='password'
              type='password'
              placeholder='••••••••'
              label='Password'
            />
            <PrimaryButton type='submit'>Login</PrimaryButton>
          </Form>
          <p className='text-sm font-light text-white'>
            Don’t have an account yet?{' '}
            <Link
              href='/register'
              className='font-medium text-primary hover:underline '>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
