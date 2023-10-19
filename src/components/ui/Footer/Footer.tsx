import footerImg from '@/assets/footer.jpg'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <section className='relative'>
        <div
          className='h-96 bg-cover bg-no-repeat bg-center'
          style={{ backgroundImage: `url(${footerImg.src})` }}>
          <div className='hero-overlay h-full w-full absolute opacity-60 '></div>
        </div>
        <div className='absolute w-full top-10 flex justify-between items-center gap-52 px-20 xl:px-56 mt-20'>
          <div className=' text-white flex-1'>
            <p className='mb-2'>OceanStay Private Island Resort</p>
            <h4 className='font-semibold text-3xl'>
              Sign up for our newsletter to receive our news, deals and special
              offers.
            </h4>
          </div>
          <div className='flex-1 text-white'>
            <input
              className='border-0 focus:ring-0 text-white focus:outline-none bg-transparent p-2 border-b-[1px] w-full placeholder:text-slate-300'
              type='text'
              placeholder='Your Email Address'
            />
            <p className='relative flex items-center py-3'>
              <label htmlFor='terms' className='ml-6 mr-2'>
                I agree to the
              </label>
              <button className='absolute right-1 bottom-14 flex items-center gap-2'>
                <span>Subscribe</span>
                <svg
                  className='rotate-45'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'>
                  <line x1='22' y1='2' x2='11' y2='13'></line>
                  <polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
                </svg>
              </button>
              <input
                className='absolute left-0 '
                type='checkbox'
                name='terms'
                id='term'
              />
              <Link href={'/'}> Privacy Policy</Link>
            </p>
          </div>
        </div>
      </section>
      <section className=' bg-slate-900 text-white py-4'>
        <div className='container mx-auto text-center'>
          <div className='mt-4'>
            <Link
              href='#'
              className='text-gray-300 hover:text-white hover:underline'>
              About Us
            </Link>
            <span className='mx-4'>|</span>
            <Link
              href='#'
              className='text-gray-300 hover:text-white hover:underline'>
              Contact Us
            </Link>
            <span className='mx-4'>|</span>
            <Link
              href='#'
              className='text-gray-300 hover:text-white hover:underline'>
              Privacy Policy
            </Link>
          </div>
          <p className='mt-4'>1234 Oceanfront Avenue, Beach City, Paradise</p>

          <p className='mt-4'>&copy; 2023 OceanStay</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
