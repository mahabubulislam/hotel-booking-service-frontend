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
    <header
      className={`fixed top-0 left-0 right-0  text-white py-4 z-10 transition-all duration-300 transform ${
        menuOpen ? 'scale-y-100 h-52 bg-gray-800 bg-opacity-50' : 'h-auto'
      } origin-top `}>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href={'/'}>
          <Image src={logo.src} height={150} width={150} alt='' />
        </Link>
        <div className='lg:hidden'>
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
        <div className='hidden lg:flex space-x-4'>
          {navItems.map((nav) => (
            <NavLink key={nav.path} nav={nav} />
          ))}
        </div>
      </div>
      <div
        className={`lg:hidden  transform transition-transform duration-300 text-center ${
          menuOpen ? 'scale-y-100' : 'scale-y-0'
        } origin-top ${menuOpen ? 'h-auto' : 'h-0'}`}>
        {navItems.map((nav) => (
          <NavLink key={nav.path} nav={nav} />
        ))}
      </div>
    </header>
  )
}

export default Header
