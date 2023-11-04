'use client'

import Form from '../Forms/Form'
import FormInput from '../Forms/FormInput'

const ContactForm = () => {
  return (
    <section>
      <body className='bg-gray-800 text-gray-100 px-8 py-12'>
        <div className=' px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg'>
          <div className='flex flex-col justify-between'>
            <div>
              <h2 className='text-4xl lg:text-5xl font-bold leading-tight'>
                Lets talk about everything!
              </h2>
              <div className='text-gray-700 mt-8'>
                Hate forms? Send us an <span className='underline'>email</span>{' '}
                instead.
              </div>
            </div>
            <div className='mt-8 text-center'></div>
          </div>
          <Form submitHandler={() => {}}>
            <FormInput
              name='name'
              id='name'
              type='text'
              required
              label='FULL NAME'
              className='w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
            />
            <FormInput
              name='email'
              id='email'
              type='email'
              required
              label='EMAIL'
              className='w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
            />

            <div className='mt-8'>
              <span className='uppercase text-sm text-gray-600 font-bold'>
                Message
              </span>
              <textarea className='w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'></textarea>
            </div>
            <div className='mt-8'>
              <button className='uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline'>
                Send Message
              </button>
            </div>
          </Form>
        </div>
      </body>
    </section>
  )
}

export default ContactForm
