'use client'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const Carousel = () => {
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
    <div className='px-10 relative'>
      <Slider {...settings}>
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
      </Slider>
    </div>
  )
}

export default Carousel
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
