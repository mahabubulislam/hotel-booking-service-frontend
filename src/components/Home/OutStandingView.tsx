import Carousel from '@/components/ui/Carousel'
import { satisfy } from '@/components/ui/font'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const OutstandingView = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  const images = [
    'https://i.ibb.co/DQwXD54/nature-953800-60.jpg',
    'https://i.ibb.co/526V5q8/img-76-683x1024.jpg',
    'https://i.ibb.co/frsrq9j/img-77-1-683x1024.jpg',
    'https://i.ibb.co/qsk69yZ/img-78-1-683x1024.jpg'
  ]
  return (
    <div className='p-10 relative'>
      <Carousel settings={settings}>
        {images.map((img) => (
          <div
            key={img}
            className='px-10 border-none focus-visible:border-none'>
            <Image
              src={img}
              height={824}
              width={550}
              alt='Hotel View'
              loading='lazy'
            />
          </div>
        ))}
      </Carousel>
      <h4
        className={`${satisfy.className} text-teal-500 text-2xl px-10  lg:w-1/2 py-5`}>
        Inspired by our history, surrounded by nature and designed to offer a
        different experience
      </h4>
    </div>
  )
}

export default OutstandingView
type IClick = {
  onClick?: () => {}
}
const NextArrow = ({ onClick }: IClick) => {
  return (
    <button
      onClick={onClick}
      className='bg-white p-2 rounded-full absolute top-1/2 right-28'>
      <ChevronRightIcon width={20} className='text-slate-900' />
    </button>
  )
}
const PrevArrow = ({ onClick }: IClick) => {
  return (
    <button
      onClick={onClick}
      className='bg-white rounded-full  p-2 absolute top-1/2 left-6 z-50'>
      <ChevronLeftIcon width={20} className='text-slate-900' />
    </button>
  )
}
