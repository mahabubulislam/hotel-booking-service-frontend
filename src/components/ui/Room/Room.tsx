import {
  ArrowRightIcon,
  Squares2X2Icon,
  UsersIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const Room = () => {
  return (
    <div>
      <div className='relative'>
        <Image
          src={'https://i.ibb.co/pwBhY2y/room.jpg'}
          width={600}
          height={700}
          alt=''
        />
        <span className='absolute top-5 left-3 bg-white text-slate-900 p-2'>
          999/Night
        </span>
      </div>
      <div className='mt-3'>
        <h3 className='text-2xl'>Premier Ocean view Villa</h3>
        <div className='flex flex-wrap items-center gap-5 mt-2 '>
          <span className='flex items-center gap-3'>
            <Squares2X2Icon width={20} color='white' />
            1800ft/sq
          </span>
          <span className='flex items-center gap-3'>
            <UsersIcon width={20} color='white' />2 Guest
          </span>
          <span className='flex items-center gap-3'>
            <BedIcon width={20} fill='white' />3 kings bed
          </span>
        </div>
        <p className='mt-3 text-sm'>
          Stunning beachfront location with 60 square meters / 646 square feet
          of interior space, located on the west side of the resort in a private
          tropical garden with a plunge pool and a private outdoor shower.
        </p>
      </div>
      <Link
        href={'/'}
        className='flex gap-3 items-center py-2 text-teal-500 font-semibold'>
        Discover more <ArrowRightIcon width={20} />
      </Link>
    </div>
  )
}

export default Room
const BedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg fill='none' viewBox='0 0 15 15' height='1em' width='1em' {...props}>
      <path fill='currentColor' d='M0 0h15v6h-1V1H1v5H0V0z' />
      <path
        fill='currentColor'
        d='M6 6H2V5h4v1zM0 15h1v-4h13v4h1V7H0v8zM9 6h4V5H9v1z'
      />
    </svg>
  )
}
