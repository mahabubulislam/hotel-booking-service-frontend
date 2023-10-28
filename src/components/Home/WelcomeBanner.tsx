import resortIcon from '@/assets/resort.png'
import Image from 'next/image'
const WelcomeBanner = () => {
  return (
    <section className='my-10'>
      <div className='flex flex-col items-center uppercase'>
        <Image src={resortIcon.src} height={50} width={50} alt='' />
        <p>Welcome to OceanStay resort</p>
      </div>
      <div className='w-3/4 mx-auto my-5 text-center'>
        <h1 className='text-6xl leading-normal'>
          In the Heart of the South Pacific, Outstanding Views
        </h1>
        <p className='w-8/12 mx-auto'>
          Nestled in the heart of the Pacific Islands resort, on the edge of a
          tranquil and beautiful Garden Island, OceanStay is a haven of warmth,
          tranquility and rejuvenation. Bathed in brilliant sunshine and clear
          skies, it offers stunning views of palm-lined beaches and gorgeous
          coral reefs.
        </p>
      </div>
    </section>
  )
}

export default WelcomeBanner
