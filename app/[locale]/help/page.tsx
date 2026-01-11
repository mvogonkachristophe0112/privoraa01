'use client'

import { useTranslations } from 'next-intl'
import Navbar from '@/components/Navbar'

export default function Help() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-background-soft">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('help.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('help.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-primary-blue">How to Send Files</h2>
            <ol className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="bg-primary-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                <div>
                  <strong>Log in</strong> to your Privora10 account
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                <div>
                  <strong>Navigate to Send page</strong> and select files to upload
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                <div>
                  <strong>Choose recipients</strong> from the list of online users
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                <div>
                  <strong>Send</strong> and monitor the upload progress
                </div>
              </li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-secondary-green">How to Receive Files</h2>
            <ol className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="bg-secondary-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                <div>
                  <strong>Check your dashboard</strong> for incoming file notifications
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                <div>
                  <strong>Go to Receive page</strong> to view encrypted files
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                <div>
                  <strong>Enter decryption key</strong> provided by the sender
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                <div>
                  <strong>Download</strong> and decrypt your files securely
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-primary-blue">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Is my data secure?</h3>
              <p className="text-gray-700">Yes, Privora10 uses end-to-end encryption to ensure your files are protected during transmission and storage.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Can multiple users receive the same file?</h3>
              <p className="text-gray-700">Absolutely! You can select multiple recipients when sending files, and each will receive their own encrypted copy.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What file types are supported?</h3>
              <p className="text-gray-700">Privora10 supports all common file types including documents, images, videos, and archives.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How do I know if a file transfer is complete?</h3>
              <p className="text-gray-700">Real-time progress indicators show upload/download status, and you'll receive notifications when transfers complete.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
          <p className="text-gray-600 mb-6">
            If you can't find the answer you're looking for, feel free to contact our support team.
          </p>
          <button className="bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue-light transition-colors">
            Contact Support
          </button>
        </div>
      </main>
    </div>
  )
}