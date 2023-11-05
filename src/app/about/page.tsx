import beachIcon from '@/assets/beach.png'
import Description from '@/components/About/Description'
import ShortHistory from '@/components/About/ShortHistory'
import { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = {
  title: 'About | Ocean Stay'
}
const About = () => {
  return (
    <main className='bg-accent py-20 '>
      <section className='container mx-auto'>
        <div className='flex flex-col items-center mb-3 uppercase'>
          <Image src={beachIcon.src} height={50} width={50} alt='' />
          <p className='text-primary'>Welcome to OceanStay resort</p>
        </div>
        <div className='w-1/2 mx-auto pb-10 text-center text-white'>
          <h1 className='text-6xl leading-normal'>
            In the Heart of the South Pacific, Outstanding Views
          </h1>
          <p className='w-8/12 mx-auto'>
            Nestled in the heart of the Pacific Islands resort, on the edge of a
            tranquil and beautiful Garden Island, OceanStay is a haven of
            warmth, tranquility and rejuvenation. Bathed in brilliant sunshine
            and clear skies, it offers stunning views of palm-lined beaches and
            gorgeous coral reefs.
          </p>
        </div>
        <ShortHistory />
        <Description />
      </section>
    </main>
  )
}

export default About
