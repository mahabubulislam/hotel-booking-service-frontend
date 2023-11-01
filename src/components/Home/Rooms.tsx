import Carousel from '@/components/ui/Carousel'
import Room from '@/components/ui/Room/Room'
import Link from 'next/link'
import { Settings } from 'react-slick'

const Rooms = () => {
  const settings: Settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    dots: true,
    arrows: false,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <section className='lg:px-20 px-10 mb-5 text-white pb-20'>
      <p className='text-primary'>ENJOY WORLD-CLASS STAY EXPERIENCE</p>
      <div className='flex justify-between items-center'>
        <h2 className='text-4xl'>The Accommodations</h2>
        <Link className='p-3 bg-secondary' href={'/rooms'}>
          Discover All Suites
        </Link>
      </div>
      <div className=' py-10'>
        <Carousel settings={settings}>
          <div className='px-5'>
            <Room />
          </div>
          <div className='px-5'>
            <Room />
          </div>
          <div className='px-5'>
            <Room />
          </div>
          <div className='px-5'>
            <Room />
          </div>
          <div className='px-5'>
            <Room />
          </div>
          <div className='px-5'>
            <Room />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Rooms
