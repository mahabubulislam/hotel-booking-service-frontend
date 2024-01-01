import Image from 'next/image'

const ShortHistory = () => {
  return (
    <section className='flex px-20 gap-10 items-center justify-between'>
      <aside className='relative py-10 mt-40'>
        <Image
          className='w-1/2 h-3/4 absolute  translate-x-44 -translate-y-32'
          src={'https://i.ibb.co/qsk69yZ/img-78-1-683x1024.jpg'}
          width={600}
          height={700}
          alt=''
        />
        <Image
          className='w-1/2'
          src={'https://i.ibb.co/frsrq9j/img-77-1-683x1024.jpg'}
          width={500}
          height={800}
          alt=''
        />
      </aside>
      <article className='flex flex-col gap-8 flex-1 text-white'>
        <p className='text-primary uppercase'>A SHORT HISTORY OF THE HOTEL</p>
        <h2 className='text-4xl'>Her Enduring Journey</h2>
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
    </section>
  )
}

export default ShortHistory
