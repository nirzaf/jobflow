import { useState } from 'react'
import { HiSearch, HiLocationMarker, HiUsers, HiBriefcase } from 'react-icons/hi'

interface Company {
  id: number
  name: string
  logo: string
  description: string
  location: string
  industry: string
  employeeCount: string
  openPositions: number
}

export default function Companies() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('all')

  const companies: Company[] = [
    {
      id: 1,
      name: 'Qatar Airways',
      logo: 'https://ik.imagekit.io/quadrate/assets/img/clients/client-1.png?updatedAt=1725572926790',
      description: 'Qatar Airways is the state-owned flag carrier of Qatar. Headquartered in Doha, it is one of the world\'s leading airlines, known for its luxury service and global connectivity.',
      location: 'Doha, Qatar',
      industry: 'Aviation & Transportation',
      employeeCount: '45,000+',
      openPositions: 28
    },
    {
      id: 2,
      name: 'Qatar Petroleum',
      logo: 'https://ik.imagekit.io/quadrate/assets/img/clients/client-2.png?updatedAt=1725572926836',
      description: 'Qatar Petroleum is a state-owned corporation established to manage the country\'s vast oil and gas resources. It is one of the largest energy companies in the world.',
      location: 'Doha, Qatar',
      industry: 'Oil & Gas',
      employeeCount: '30,000+',
      openPositions: 15
    },
    {
      id: 3,
      name: 'Ooredoo',
      logo: 'https://ik.imagekit.io/quadrate/assets/img/clients/client-3.png?updatedAt=1725572926671',
      description: 'Ooredoo is Qatar\'s leading telecommunications provider, offering innovative mobile, wireless, and content services throughout the Middle East and beyond.',
      location: 'West Bay, Doha',
      industry: 'Telecommunications',
      employeeCount: '15,000+',
      openPositions: 12
    },
    {
      id: 4,
      name: 'Qatar Foundation',
      logo: 'https://ik.imagekit.io/quadrate/assets/img/clients/client-4.png?updatedAt=1725572926848',
      description: 'Qatar Foundation is a non-profit organization focused on education, research, and community development. It operates multiple educational and research institutions.',
      location: 'Education City, Doha',
      industry: 'Education & Research',
      employeeCount: '12,000+',
      openPositions: 20
    },
    {
      id: 5,
      name: 'Commercial Bank of Qatar',
      logo: 'https://ik.imagekit.io/quadrate/assets/img/clients/client-5.png?updatedAt=1725572926845',
      description: 'Commercial Bank is one of Qatar\'s leading financial institutions, providing a full range of banking services to individuals and businesses.',
      location: 'Grand Hamad Street, Doha',
      industry: 'Banking & Finance',
      employeeCount: '8,000+',
      openPositions: 8
    },
    {
      id: 6,
      name: 'Hamad Medical Corporation',
      logo: 'https://ik.imagekit.io/quadrate/assets/img/clients/client-6.png?updatedAt=1725572926840',
      description: 'Hamad Medical Corporation is Qatar\'s main healthcare provider, operating multiple hospitals and medical facilities throughout the country.',
      location: 'Al Rayyan Road, Doha',
      industry: 'Healthcare',
      employeeCount: '25,000+',
      openPositions: 35
    }
  ]

  const industries = ['all', 'Aviation & Transportation', 'Oil & Gas', 'Telecommunications', 'Education & Research', 'Banking & Finance', 'Healthcare']

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesIndustry = selectedIndustry === 'all' || company.industry === selectedIndustry
    return matchesSearch && matchesIndustry
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl text-center mb-8">
            Discover Top Companies in Qatar
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search companies by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white dark:bg-gray-800 border-0 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-shadow duration-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Industry Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {industries.map(industry => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:-translate-y-1 ${
                selectedIndustry === industry
                  ? 'bg-blue-600 dark:bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
            >
              {industry === 'all' ? 'All Industries' : industry}
            </button>
          ))}
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompanies.map(company => (
            <div
              key={company.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <img 
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="ml-4 flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                      {company.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <HiLocationMarker className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span className="truncate">{company.location}</span>
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {company.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <HiUsers className="w-4 h-4 mr-1" />
                      <span>{company.employeeCount}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <HiBriefcase className="w-4 h-4 mr-1" />
                      <span>{company.openPositions} open positions</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Industry: {company.industry}
                  </div>
                </div>
                
                <button className="mt-4 w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">
                  View Open Positions
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <HiUsers className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600" />
            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No companies found</h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
