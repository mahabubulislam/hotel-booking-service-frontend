'use client'

import Form from '../Forms/Form'
import FormInput from '../Forms/FormInput'
import PrimaryButton from '../ui/PrimaryButton'

const ContactForm = () => {
  return (
    <section>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 px-10 py-16 mx-auto text-white shadow-2xl rounded-lg '>
        <div className='flex flex-col justify-between'>
          <div>
            <h2 className='text-4xl lg:text-5xl font-bold leading-tight'>
              Lets talk about everything!
            </h2>
            <div className='text-gray-300 mt-8'>
              Hate forms? Send us an{' '}
              <span className='underline text-primary'>email</span> instead.
            </div>
          </div>
          <div className='mt-8 text-center'></div>
        </div>
        <Form submitHandler={() => {}}>
          <FormInput
            name='name'
            id='name'
            type='text'
            label='FULL NAME'
            className='w-full  mt-2 p-3 rounded-lg'
          />
          <FormInput
            name='email'
            id='email'
            type='email'
            label='EMAIL'
            className='w-full  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
          />

          <div className='mt-8'>
            <span className='uppercase text-sm text-white font-bold'>
              Message
            </span>
            <textarea className='w-full h-32  mt-2 p-3  focus:outline-none focus:shadow-outline border border-gray-300 text-gray-400 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block  bg-gray-700'></textarea>
          </div>
          <div className='mt-8'>
            <PrimaryButton type='submit' className='uppercase'>
              Send Message
            </PrimaryButton>
          </div>
        </Form>
      </div>
    </section>
  )
}

export default ContactForm
