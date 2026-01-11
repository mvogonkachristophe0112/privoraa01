'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function Navbar() {
  const locale = useLocale()

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="text-xl font-bold text-primary-blue">
              Privora10
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href={`/${locale}`} className="text-gray-700 hover:text-primary-blue px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href={`/${locale}/about`} className="text-gray-700 hover:text-primary-blue px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href={`/${locale}/help`} className="text-gray-700 hover:text-primary-blue px-3 py-2 rounded-md text-sm font-medium">
              Help
            </Link>
            <Link href={`/${locale}/login`} className="text-primary-blue hover:text-primary-blue-light px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link href={`/${locale}/signup`} className="bg-primary-blue text-white hover:bg-primary-blue-light px-3 py-2 rounded-md text-sm font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}