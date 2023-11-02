import Hero from '@/components/Home/Hero'
import OurServices from '@/components/Home/OurServices'
import OverviewVideo from '@/components/Home/OverviewVideo'
import Reviews from '@/components/Home/Reviews'
import Rooms from '@/components/Home/Rooms'
import WelcomeBanner from '@/components/Home/WelcomeBanner'

export default function Home() {
  return (
    <main className='bg-accent'>
      <Hero />
      <WelcomeBanner />
      <Rooms />
      <OverviewVideo />
      <OurServices />
      <Reviews />
    </main>
  )
}
