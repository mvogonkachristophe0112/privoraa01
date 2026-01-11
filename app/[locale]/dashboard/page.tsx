'use client'

import AuthLayout from '@/components/AuthLayout'

export default function Dashboard() {
  // Mock data for online users
  const onlineUsers = [
    { id: 1, name: 'Alice Johnson', status: 'online' },
    { id: 2, name: 'Bob Smith', status: 'online' },
    { id: 3, name: 'Charlie Brown', status: 'away' },
    { id: 4, name: 'Diana Prince', status: 'online' },
  ]

  const recentActivity = [
    { id: 1, action: 'Sent file to Alice', time: '2 hours ago' },
    { id: 2, action: 'Received file from Bob', time: '4 hours ago' },
    { id: 3, action: 'File decrypted successfully', time: '1 day ago' },
  ]

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's your activity overview.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* User Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-primary-blue">Account Information</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">John Doe</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">john@example.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Account Status:</span>
                <span className="text-secondary-green font-medium">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Files Sent:</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Files Received:</span>
                <span className="font-medium">8</span>
              </div>
            </div>
          </div>

          {/* Online Users */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-secondary-green">Online Users</h2>
            <div className="space-y-3">
              {onlineUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      user.status === 'online' ? 'bg-secondary-green' : 'bg-gray-400'
                    }`}></div>
                    <span className="text-gray-700">{user.name}</span>
                  </div>
                  <button className="text-primary-blue hover:text-primary-blue-light text-sm">
                    Send File
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary-blue">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <span className="text-gray-700">{activity.action}</span>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 text-secondary-green">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="bg-primary-blue text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-blue-light transition-colors">
              Send New File
            </button>
            <button className="border border-primary-blue text-primary-blue px-4 py-3 rounded-lg font-semibold hover:bg-primary-blue hover:text-white transition-colors">
              View Received Files
            </button>
            <button className="border border-secondary-green text-secondary-green px-4 py-3 rounded-lg font-semibold hover:bg-secondary-green hover:text-white transition-colors">
              Manage Files
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}