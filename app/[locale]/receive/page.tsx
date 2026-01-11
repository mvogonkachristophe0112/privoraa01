'use client'

import { useState } from 'react'
import AuthLayout from '@/components/AuthLayout'

export default function Receive() {
  const [decryptionKey, setDecryptionKey] = useState('')

  // Mock received files
  const receivedFiles = [
    {
      id: '1',
      name: 'document.pdf',
      sender: 'Alice Johnson',
      size: '2.5 MB',
      receivedAt: '2 hours ago',
      encrypted: true
    },
    {
      id: '2',
      name: 'image.jpg',
      sender: 'Bob Smith',
      size: '1.8 MB',
      receivedAt: '1 day ago',
      encrypted: true
    },
  ]

  const handleDecrypt = (fileId: string) => {
    // Simulate decryption
    alert(`Decrypting file ${fileId}...`)
  }

  const handleDownload = (fileId: string) => {
    // Simulate download
    alert(`Downloading decrypted file ${fileId}...`)
  }

  return (
    <AuthLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Receive Files</h1>
          <p className="text-gray-600 mt-2">View and decrypt files sent to you.</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 text-secondary-green">Received Files</h2>

          {receivedFiles.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No files received yet.</p>
          ) : (
            <div className="space-y-4">
              {receivedFiles.map((file) => (
                <div key={file.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-gray-900">{file.name}</h3>
                      <p className="text-sm text-gray-600">
                        From: {file.sender} • {file.size} • {file.receivedAt}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                        Encrypted
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <label htmlFor={`key-${file.id}`} className="block text-sm font-medium text-gray-700 mb-1">
                        Decryption Key
                      </label>
                      <input
                        type="text"
                        id={`key-${file.id}`}
                        value={decryptionKey}
                        onChange={(e) => setDecryptionKey(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="Enter decryption key"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleDecrypt(file.id)}
                        className="bg-secondary-green text-white px-4 py-2 rounded-md font-semibold hover:bg-secondary-green-light transition-colors"
                      >
                        Decrypt
                      </button>
                      <button
                        onClick={() => handleDownload(file.id)}
                        disabled={!decryptionKey}
                        className="bg-primary-blue text-white px-4 py-2 rounded-md font-semibold hover:bg-primary-blue-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold text-primary-blue mb-2">Security Note</h3>
          <p className="text-sm text-gray-700">
            Files are encrypted end-to-end. Make sure to use the correct decryption key provided by the sender.
            Decrypted files are not stored on our servers.
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}