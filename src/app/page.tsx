import Hero from '@/components/Home/Hero'
import OurServices from '@/components/Home/OurServices'
import OverviewVideo from '@/components/Home/OverviewVideo'
import Rooms from '@/components/Home/Rooms'
import WelcomeBanner from '@/components/Home/WelcomeBanner'
export default function Home() {
  return (
    <main className='bg-slate-900'>
      <Hero />
      <WelcomeBanner />
      <Rooms />
      <OverviewVideo />
      <OurServices />
    </main>
  )
}
