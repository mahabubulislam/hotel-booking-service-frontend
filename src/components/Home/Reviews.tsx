import Carousel from '@/components/ui/Carousel'
import Review from '@/components/ui/Review/Review'
import { Settings } from 'react-slick'
const Reviews = () => {
  const settings: Settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    arrows: false
  }
  return (
    <section className='container py-12 mx-auto md:px-6'>
      <div className='p-10 lg:w-1/3'>
        <h6 className='text-xl text-teal-500 '>What Say Clients</h6>
        <h2 className='text-4xl leading-normal text-white mt-3'>
          Our Clients are Important to Us
        </h2>
      </div>
      <div className='mb-32 text-center lg:text-left'>
        <div className='sm:px-6 md:px-12'>
          <div className='container mx-auto xl:px-32'>
            <Carousel settings={settings}>
              <div>
                <Review />
              </div>
              <div>
                <Review />
              </div>
              <div>
                <Review />
              </div>
              <div>
                <Review />
              </div>
            </Carousel>
            {/* <Review /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
