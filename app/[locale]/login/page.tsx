'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import Navbar from '@/components/Navbar'

export default function Login() {
  const t = useTranslations('auth.login')
  const locale = useLocale()

  return (
    <div className="min-h-screen bg-background-soft">
      <Navbar />
      <main className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t('title')}
            </h1>
            <p className="text-gray-600">
              {t('subtitle')}
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t('email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                {t('password')}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link href={`/${locale}/forgot-password`} className="text-primary-blue hover:text-primary-blue-light">
                  {t('forgotPassword')}
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-blue text-white py-3 px-4 rounded-md font-semibold hover:bg-primary-blue-light focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 transition-colors"
            >
              {t('loginButton')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {t('noAccount')}{' '}
              <Link href={`/${locale}/signup`} className="text-primary-blue hover:text-primary-blue-light font-medium">
                {t('signupLink')}
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}