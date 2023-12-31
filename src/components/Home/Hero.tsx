import heroImg from '@/assets/homepage-hero.jpg'
import SearchBar from '@/components/ui/SearchBar'
const Hero = () => {
  return (
    <section className='relative'>
      <div
        className='h-screen bg-cover bg-no-repeat bg-center'
        style={{ backgroundImage: `url(${heroImg.src})` }}>
        <div className='hero-overlay h-full w-full absolute opacity-50 '></div>
      </div>
      <div className='absolute top-52 xl:top-[280px] w-full'>
        <div className='text-center  text-white w-full lg:w-1/2  mx-auto'>
          <h1 className='text-7xl mb-5'>OceanStay Private Island Resort</h1>
          <p className='font-semibold'>
            Where the Gentle Caress of Waves Meets Unparalleled Luxury and
            Serenity
          </p>
        </div>
        <SearchBar />
      </div>
    </section>
  )
}

export default Hero
