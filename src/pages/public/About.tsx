import { HiLightBulb, HiUsers, HiGlobe, HiChartBar } from 'react-icons/hi'

export default function About() {
  const features = [
    {
      title: 'Our Vision',
      description: 'Connecting Qatar\'s talent with world-class opportunities, fostering economic growth and professional development.',
      icon: HiLightBulb,
      color: 'bg-blue-500 dark:bg-blue-600'
    },
    {
      title: 'Our Community',
      description: 'Building a thriving ecosystem of professionals, employers, and opportunities in Qatar\'s dynamic job market.',
      icon: HiUsers,
      color: 'bg-green-500 dark:bg-green-600'
    },
    {
      title: 'Global Reach',
      description: 'Bridging international talent with Qatar\'s ambitious vision, creating a diverse and skilled workforce.',
      icon: HiGlobe,
      color: 'bg-purple-500 dark:bg-purple-600'
    },
    {
      title: 'Market Impact',
      description: 'Driving economic growth through strategic job matching and workforce development initiatives.',
      icon: HiChartBar,
      color: 'bg-red-500 dark:bg-red-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 sm:py-24 animate-fade-in">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1 className="block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors duration-200">
              About Qatar Jobs Portal
            </h1>
            <p className="mt-8 text-center text-xl leading-8 text-gray-600 dark:text-gray-300 transition-colors duration-200">
              Your gateway to career opportunities in Qatar. We connect talented professionals with leading organizations, 
              fostering growth and innovation in Qatar's dynamic economy.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className={`absolute -top-4 left-4 p-3 rounded-xl ${feature.color} transition-colors duration-200`}>
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-300 transition-colors duration-200">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white dark:bg-gray-800 py-16 sm:py-24 animate-fade-in border-t border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-200">5000+</div>
              <div className="mt-2 text-base text-gray-600 dark:text-gray-300 transition-colors duration-200">Active Job Listings</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 transition-colors duration-200">10k+</div>
              <div className="mt-2 text-base text-gray-600 dark:text-gray-300 transition-colors duration-200">Registered Companies</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-200">50k+</div>
              <div className="mt-2 text-base text-gray-600 dark:text-gray-300 transition-colors duration-200">Job Seekers</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-red-600 dark:text-red-400 transition-colors duration-200">95%</div>
              <div className="mt-2 text-base text-gray-600 dark:text-gray-300 transition-colors duration-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 py-16 animate-fade-in transition-colors duration-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100 dark:text-blue-50">
            Join thousands of professionals who have found their dream careers through Qatar Jobs Portal.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-md bg-white dark:bg-gray-800 px-6 py-3 text-base font-semibold text-blue-600 dark:text-blue-400 shadow-sm hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1">
              Find Jobs
            </button>
            <button className="rounded-md bg-blue-500 dark:bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-400 dark:hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-1">
              Post a Job
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
