import { FaMapMarkerAlt, FaUsers, FaBriefcase } from 'react-icons/fa'

interface Company {
  id: number;
  name: string;
  logo: string;
  description: string;
  location: string;
  industry: string;
  employeeCount: string;
  openPositions: number;
}

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
];

export default function Companies() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Companies</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <div key={company.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="w-16 h-16 object-contain"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{company.name}</h3>
                  <p className="text-sm text-gray-500 flex items-center">
                    <FaMapMarkerAlt className="mr-1" />
                    {company.location}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {company.description}
              </p>

              <div className="border-t pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <FaUsers className="mr-2" />
                    {company.employeeCount}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaBriefcase className="mr-2" />
                    {company.openPositions} open positions
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Industry: {company.industry}
                </div>
              </div>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                View Open Positions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
