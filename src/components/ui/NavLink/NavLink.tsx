import Link from 'next/link'
import { usePathname } from 'next/navigation'
type NavProps = {
  nav: { name: string; path: string }
}
const NavLink = ({ nav }: NavProps) => {
  const currentRoute = usePathname()

  return (
    <Link
      href={nav.path}
      className={`block text-white py-1 px-4 hover:text-gray-300 ${
        currentRoute === nav.path
          ? 'underline underline-offset-8 font-bold'
          : 'font-medium '
      }`}>
      {nav.name}
    </Link>
  )
}

export default NavLink
