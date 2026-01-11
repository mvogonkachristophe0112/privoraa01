import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function ForgotPassword({
  params: { locale }
}: {
  params: { locale: string }
}) {

  return (
    <div className="min-h-screen bg-background-soft">
      <Navbar />
      <main className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Reset Password
            </h1>
            <p className="text-gray-600">
              Enter your email to receive reset instructions
            </p>
          </div>
  
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
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
  
            <button
              type="submit"
              className="w-full bg-primary-blue text-white py-3 px-4 rounded-md font-semibold hover:bg-primary-blue-light focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 transition-colors"
            >
              Send Reset Link
            </button>
          </form>
  
          <div className="mt-6 text-center">
            <Link href={`/${locale}/login`} className="text-primary-blue hover:text-primary-blue-light font-medium">
              Back to login
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}