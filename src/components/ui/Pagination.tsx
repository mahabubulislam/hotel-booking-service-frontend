import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const Pagination = () => {
  return (
    <div className='max-w-md ml-auto px-4'>
      <nav
        className='flex flex-row flex-nowrap justify-between md:justify-center items-center'
        aria-label='Pagination'>
        <a
          className='flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300'
          href='#'
          title='Previous Page'>
          <span className='sr-only'>Previous Page</span>
          <ChevronLeftIcon width={20} />
        </a>
        <a
          className='hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300'
          href='#'
          title='Page 1'>
          1
        </a>
        <a
          className='hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300'
          href='#'
          title='Page 2'>
          2
        </a>
        <a
          className='hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-black bg-black text-white pointer-events-none'
          href='#'
          aria-current='page'
          title='Page 3'>
          3
        </a>
        <a
          className='hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300'
          href='#'
          title='Page 4'>
          4
        </a>
        <a
          className='hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300'
          href='#'
          title='Page 5'>
          5
        </a>
        <a
          className='flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300'
          href='#'
          title='Next Page'>
          <span className='sr-only'>Next Page</span>
          <ChevronRightIcon width={20} />
        </a>
      </nav>
    </div>
  )
}

export default Pagination
