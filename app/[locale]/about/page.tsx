import Navbar from '@/components/Navbar'

export default function About() {

  return (
    <div className="min-h-screen bg-background-soft">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Privora10
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Privora10 is a secure file transfer application designed for multiple users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">What is Privora10?</h2>
            <p className="text-gray-700 mb-4">
              Privora10 is a cutting-edge web application designed for secure multi-user file transfer.
              Built as a final-year academic project, it demonstrates advanced concepts in encryption,
              real-time communication, and modern web development.
            </p>
            <p className="text-gray-700 mb-4">
              The application allows multiple users to share encrypted files simultaneously,
              with real-time status updates and presence indicators.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary-green">Technology Stack</h2>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Frontend:</strong> Next.js with TypeScript and Tailwind CSS</li>
              <li>• <strong>Internationalization:</strong> next-intl for multi-language support</li>
              <li>• <strong>State Management:</strong> React Context and Hooks</li>
              <li>• <strong>Deployment:</strong> Vercel for production hosting</li>
              <li>• <strong>Security:</strong> End-to-end encryption (planned for backend)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-primary-blue">Architecture Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="font-semibold mb-2">Frontend Layer</h3>
              <p className="text-sm text-gray-600">Responsive UI with real-time updates and multi-language support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="font-semibold mb-2">Backend API</h3>
              <p className="text-sm text-gray-600">RESTful API with WebSocket support for real-time features</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🗄️</span>
              </div>
              <h3 className="font-semibold mb-2">Database</h3>
              <p className="text-sm text-gray-600">Secure storage for user data and file metadata</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}