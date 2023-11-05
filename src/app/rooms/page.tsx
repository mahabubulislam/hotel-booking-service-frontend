import Filter from '@/components/ui/Filter'
import Pagination from '@/components/ui/Pagination'
import Room from '@/components/ui/Room/Room'
import SearchBar from '@/components/ui/SearchBar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rooms | Ocean Stay'
}
const Rooms = () => {
  return (
    <main className='bg-accent py-20'>
      <div className='my-10'>
        <SearchBar />
      </div>
      <section className='px-20 mt-10 mx-auto'>
        <div className='flex flex-col items-center gap-5 '>
          <p className='text-primary uppercase'>START YOUR COMFORTABLE STAY</p>
          <div className='w-3/4 mx-auto pb-10 text-center text-white'>
            <h3 className='text-4xl leading-normal'>
              Explore our refined accommodation options and find the perfect
              space for your stay.
            </h3>
            <p className='w-3/4 mx-auto my-5'>
              The resort offers a total of 139 suites and villas and a wide
              range of facilities, services and activities to its guests. In an
              effort to provide a peaceful and tranquil environment.
            </p>
          </div>
        </div>
      </section>
      <Filter>
        <section className='grid grid-cols-1 md:grid-cols-2  gap-10 text-white px-20'>
          {[...Array(10)].map((room, index) => (
            <Room key={index} />
          ))}
        </section>
      </Filter>
      <Pagination />
    </main>
  )
}

export default Rooms
