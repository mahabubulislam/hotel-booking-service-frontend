import serviceImg1 from '@/assets/our-services-1.jpg'
import serviceImg from '@/assets/our-services.jpg'
import { satisfy } from '@/components/ui/font'
import { WifiIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
const OurServices = () => {
  return (
    <section className='flex  flex-col lg:flex-row lg:px-20 px-10 py-20 gap-20 text-white'>
      <div className='max-w-2xl'>
        <Image src={serviceImg} height={800} width={600} alt='' />
        <h4 className={`${satisfy.className} text-primary text-2xl mt-7`}>
          Inspired by our history, surrounded by nature and designed to offer a
          different experience
        </h4>
      </div>
      <aside>
        <div>
          <p className='uppercase text-primary mb-3'>
            Discover the service we offered
          </p>
          <h1 className='text-4xl leading-normal'>
            All the Essentials for a Cozy and Comfortable Stay
          </h1>
        </div>
        <div className='grid grid-cols-2 mt-5 gap-5'>
          <div className='flex items-center  p-2 gap-5'>
            <WifiIcon className='text-primary' width={40} />
            <div>
              <h6 className='text-xl mb-3'>Free Wifi Facilities</h6>
              <p className='text-sm'>
                Enjoy free high speed internet upto 100Mbps and max 10 devices
              </p>
            </div>
          </div>
          <div className='flex items-center  p-2 gap-5'>
            <WifiIcon className='text-primary' width={40} />
            <div>
              <h6 className='text-xl mb-3'>Free Wifi Facilities</h6>
              <p className='text-sm'>
                Enjoy free high speed internet upto 100Mbps and max 10 devices
              </p>
            </div>
          </div>
          <div className='flex items-center  p-2 gap-5'>
            <WifiIcon className='text-primary' width={40} />
            <div>
              <h6 className='text-xl mb-3'>Free Wifi Facilities</h6>
              <p className='text-sm'>
                Enjoy free high speed internet upto 100Mbps and max 10 devices
              </p>
            </div>
          </div>
          <div className='flex items-center  p-2 gap-5'>
            <WifiIcon className='text-primary' width={40} />
            <div>
              <h6 className='text-xl mb-3'>Free Wifi Facilities</h6>
              <p className='text-sm'>
                Enjoy free high speed internet upto 100Mbps and max 10 devices
              </p>
            </div>
          </div>
          <div className='flex items-center  p-2 gap-5'>
            <WifiIcon className='text-primary' width={40} />
            <div>
              <h6 className='text-xl mb-3'>Free Wifi Facilities</h6>
              <p className='text-sm'>
                Enjoy free high speed internet upto 100Mbps and max 10 devices
              </p>
            </div>
          </div>
          <div className='flex items-center  p-2 gap-5'>
            <WifiIcon className='text-primary' width={40} />
            <div>
              <h6 className='text-xl mb-3'>Free Wifi Facilities</h6>
              <p className='text-sm'>
                Enjoy free high speed internet upto 100Mbps and max 10 devices
              </p>
            </div>
          </div>
        </div>
        <div className='py-5 h-3/4'>
          <Image src={serviceImg1} height={400} width={800} alt='' />
        </div>
      </aside>
    </section>
  )
}

export default OurServices
