'use client'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import NavLink from '../NavLink/NavLink'
type NavItem = { name: string; path: string }
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' }
  ]

  return (
    <header>
      <nav className={`absolute  top-5 left-0 z-50 w-full bg-transparent`}>
        <div className='container px-6 lg:px-0 lg:max-w-screen-xl mx-auto rounded'>
          <div className='lg:flex lg:items-center lg:justify-between'>
            <div className='flex items-center justify-between'>
              <div>
                <Link href={'/'}>
                  <Image src={logo.src} height={150} width={150} alt='' />
                </Link>
              </div>
              <div className='flex z-30 lg:hidden'>
                <button
                  className='text-white focus:outline-none'
                  onClick={() => setMenuOpen(!menuOpen)}>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    {menuOpen ? (
                      <path d='M6 18L18 6M6 6l12 12'></path>
                    ) : (
                      <path d='M3 12h18M3 6h18M3 18h18'></path>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div
              className={`${
                menuOpen
                  ? 'translate-y-0 bg-accent bg-opacity-50 '
                  : 'opacity-0 -translate-y-full'
              } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  lg:mt-0 lg:p-0 -top-5 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-y-0 lg:flex lg:items-center`}>
              <div className='flex flex-col - md:mx-0  lg:flex-row items-center  lg:w-full'>
                {navItems.map((nav) => (
                  <NavLink key={nav.path} nav={nav} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
