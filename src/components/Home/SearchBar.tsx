'use client'

import DatePicker from '@/components/ui/DatePicker'
import { BedIcon } from '@/components/ui/icons/icons'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchBar = () => {
  return (
    <form className='flex items-center justify-center gap-3 mt-10 p-3'>
      <DatePicker
        className='w-72 relative '
        inputClassName='relative transition-all duration-300 py-4 pl-4 pr-14 w-full border-gray-300 dark:bg-white dark:text-slate-700 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-slate-600 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-teal-500 focus:ring-teal-500/20'
        footer={false}
      />
      <label htmlFor='bed-search-input' className='block relative'>
        <input
          id='bed-search-input'
          type='number'
          className=' py-4 pl-4 pr-12  border-gray-300 dark:bg-white dark:text-slate-700 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-slate-600 bg-white focus:ring  focus:border-teal-500 focus:ring-teal-500/20'
          placeholder='Bed'
        />
        <BedIcon
          width={'40px'}
          fill='slate'
          className='absolute right-0 bottom-[0.6px] h-full px-3 text-gray-400 focus:outline-none '
        />
      </label>
      <label htmlFor='search-btn' className='block relative cursor-pointer '>
        <input
          type='submit'
          id='search-btn'
          className='cursor-pointer py-4 pl-4 pr-20 bg-teal-500 border-gray-300  text-white dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-slate-600 focus:ring  focus:border-teal-500 focus:ring-teal-500/20'
          value={'Check Availability'}
        />
        <MagnifyingGlassIcon
          width={50}
          color='white'
          className=' absolute right-0 bottom-[0.6px]  h-full px-3  focus:outline-none '
        />
      </label>
    </form>
  )
}

export default SearchBar
