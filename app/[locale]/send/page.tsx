'use client'

import { useState } from 'react'
import AuthLayout from '@/components/AuthLayout'

export default function Send() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  // Mock online users
  const onlineUsers = [
    { id: '1', name: 'Alice Johnson', status: 'online' },
    { id: '2', name: 'Bob Smith', status: 'online' },
    { id: '3', name: 'Charlie Brown', status: 'away' },
    { id: '4', name: 'Diana Prince', status: 'online' },
  ]

  const handleFileSelect = (files: FileList | null) => {
    if (files) {
      setSelectedFiles(Array.from(files))
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    handleFileSelect(e.dataTransfer.files)
  }

  const handleRecipientToggle = (userId: string) => {
    setSelectedRecipients(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  const handleSend = async () => {
    if (selectedFiles.length === 0 || selectedRecipients.length === 0) return

    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setSelectedFiles([])
          setSelectedRecipients([])
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <AuthLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Send Files</h1>
          <p className="text-gray-600 mt-2">Securely share files with multiple users simultaneously.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* File Upload */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-primary-blue">Select Files</h2>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-blue transition-colors cursor-pointer"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => document.getElementById('file-input')?.click()}
            >
              <div className="text-4xl mb-4">📁</div>
              <p className="text-gray-600 mb-2">
                Drag and drop files here, or click to select
              </p>
              <p className="text-sm text-gray-500">
                Supports all file types (documents, images, videos, etc.)
              </p>
              <input
                id="file-input"
                type="file"
                multiple
                className="hidden"
                onChange={(e) => handleFileSelect(e.target.files)}
              />
            </div>

            {selectedFiles.length > 0 && (
              <div className="mt-4">
                <h3 className="font-medium mb-2">Selected Files:</h3>
                <div className="space-y-2">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                      <span className="text-sm">{file.name}</span>
                      <span className="text-xs text-gray-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Recipients */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-secondary-green">Select Recipients</h2>
            <div className="space-y-3">
              {onlineUsers.map((user) => (
                <label key={user.id} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedRecipients.includes(user.id)}
                    onChange={() => handleRecipientToggle(user.id)}
                    className="rounded border-gray-300 text-primary-blue focus:ring-primary-blue"
                  />
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      user.status === 'online' ? 'bg-secondary-green' : 'bg-gray-400'
                    }`}></div>
                    <span className="text-gray-700">{user.name}</span>
                  </div>
                </label>
              ))}
            </div>
            {selectedRecipients.length > 0 && (
              <p className="mt-4 text-sm text-gray-600">
                {selectedRecipients.length} recipient{selectedRecipients.length > 1 ? 's' : ''} selected
              </p>
            )}
          </div>
        </div>

        {/* Upload Progress */}
        {isUploading && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-primary-blue">Uploading...</h2>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-primary-blue h-4 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-600">{uploadProgress}% complete</p>
          </div>
        )}

        {/* Send Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSend}
            disabled={selectedFiles.length === 0 || selectedRecipients.length === 0 || isUploading}
            className="bg-primary-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-blue-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isUploading ? 'Sending...' : 'Send Files'}
          </button>
        </div>
      </div>
    </AuthLayout>
  )
}