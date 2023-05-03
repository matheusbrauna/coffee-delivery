import { ShoppingCart } from '@phosphor-icons/react'
import Link from 'next/link'
import Image from 'next/image'
import { Location } from './Location'

export function Header() {
  return (
    <header className="fixed z-10 w-full bg-base-background">
      <nav className="container top-0 left-0 flex items-center justify-between h-24">
        <Link href="/">
          <Image src="/assets/logo.svg" alt="" width={84} height={40} />
        </Link>
        <div className="flex gap-3">
          <Location />
          <Link
            href="/checkout"
            className="relative p-2 rounded-md bg-brand-yellow-light"
          >
            <ShoppingCart
              size={24}
              className="text-brand-yellow-dark"
              weight="fill"
            />
            <span className="absolute w-5 h-5 text-xs leading-5 text-center rounded-full text-base-white -top-2 -right-2 bg-brand-yellow-dark">
              3
            </span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
