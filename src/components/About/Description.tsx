import Image from 'next/image'

const Description = () => {
  return (
    <section className='flex gap-20 items-center justify-between'>
      <article className='flex flex-col gap-8 flex-1 text-white'>
        <p className='text-primary uppercase'>ENDLESS INDOOR AND OUTDOOR FUN</p>
        <h2 className='text-4xl'>
          A World of Choice and Endless Adventure Await You
        </h2>
        <div>
          <p className='mb-5'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </p>
          <p>
            An enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi.{' '}
          </p>
        </div>
      </article>
      <aside className='relative py-10 mt-40 flex-1'>
        <Image
          className='w-1/2 h-3/4 absolute  translate-x-44 -translate-y-32'
          src={'https://i.ibb.co/DQwXD54/nature-953800-60.jpg'}
          width={600}
          height={700}
          alt=''
        />
        <Image
          className='w-1/2'
          src={'https://i.ibb.co/526V5q8/img-76-683x1024.jpg'}
          width={500}
          height={800}
          alt=''
        />
      </aside>
    </section>
  )
}

export default Description
