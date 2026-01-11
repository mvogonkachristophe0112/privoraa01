import Link from 'next/link'

export default function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  return (
    <div className="min-h-screen bg-background-soft">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-blue-green text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to Privora10
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Secure Multi-User Encrypted File Transfer
              </p>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Share files securely with multiple users simultaneously.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/signup"
                  className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-blue transition-colors"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Privora10?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Secure, fast, and easy file sharing for multiple users simultaneously.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
                <p className="text-gray-600">Your files are encrypted before transmission and can only be decrypted by authorized recipients.</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-secondary-green rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Multi-User Support</h3>
                <p className="text-gray-600">Share files with multiple users at the same time with real-time status updates.</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
                <p className="text-gray-600">Built with modern technology for fast uploads and downloads with progress tracking.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}