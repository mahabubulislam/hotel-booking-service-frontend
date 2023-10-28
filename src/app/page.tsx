import Hero from '@/components/Home/Hero'
import OverviewVideo from '@/components/Home/OverviewVideo'
import WelcomeBanner from '@/components/Home/WelcomeBanner'
export default function Home() {
  return (
    <main className='bg-slate-900'>
      <Hero />
      <WelcomeBanner />
      <OverviewVideo />
    </main>
  )
}
