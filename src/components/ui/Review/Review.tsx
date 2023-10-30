import userImg from '@/assets/beautiful-girl-city.jpg'
import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
const Review = () => {
  return (
    <div className='grid  items-center lg:grid-cols-2'>
      <div className='mb-12 md:mt-12 lg:mt-0 lg:mb-0'>
        <div className='hover:scale-105 ease-in duration-300 relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14'>
          <h2 className='mb-2 text-3xl font-bold text-teal-500 '>Anna Doe</h2>
          <p className='mb-4 font-semibold text-teal-500'>Graphic designer</p>
          <p className='mb-6 text-neutral-500 dark:text-neutral-300'>
            Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque
            iaculis malesuada. Aenean gravida magna orci, non efficitur est
            porta id. Donec magna diam.
          </p>
          <p className='mb-6 text-neutral-500 dark:text-neutral-300'>
            Ad, at blanditiis quaerat laborum officia incidunt cupiditate
            dignissimos voluptates eius aliquid minus praesentium! Perferendis
            et totam ipsum ex aut earum libero accusamus voluptas quod numquam
            saepe, consequuntur nihil quia tenetur consequatur. Quis, explicabo
            deserunt quasi assumenda ea maiores nulla, et dolor saepe
            praesentium natus error reiciendis voluptas iste. Esse, laudantium
            ipsum animi, quos voluptatibus atque vero repellat sit eligendi
            autem maiores quasi cum aperiam. Aperiam rerum culpa accusantium,
            ducimus deserunt aliquid alias vitae quasi corporis placeat vel
            maiores explicabo commodi!
          </p>
          <ul className='flex justify-center lg:justify-start'>
            <StarIcon width={20} className='text-yellow-500' />
            <StarIcon width={20} className='text-yellow-500' />
            <StarIcon width={20} className='text-yellow-500' />
            <StarIcon width={20} className='text-yellow-500' />
            <StarIcon width={20} className='text-yellow-500' />
          </ul>
        </div>
      </div>
      <div className='md:mb-12 lg:mb-0 w-full'>
        <Image
          src={userImg}
          width={700}
          height={600}
          className='lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20'
          alt='user image'
        />
      </div>
    </div>
  )
}

export default Review
