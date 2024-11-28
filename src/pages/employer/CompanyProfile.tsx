import { mockCompany, mockTeamMembers } from '../../data/employerMockData';
import { Globe, MapPin, Calendar } from 'lucide-react';

export default function CompanyProfile() {
  const company = mockCompany;
  const teamMembers = mockTeamMembers;

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <div className="relative h-32 sm:h-48 rounded-lg bg-gray-200 mb-4">
          {company.banner && (
            <img
              src={company.banner}
              alt="Company Banner"
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-lg shadow-sm border border-gray-200 -mt-12 sm:-mt-16 relative z-10 flex items-center justify-center p-2 mx-auto sm:mx-0">
            {company.logo ? (
              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-2xl sm:text-3xl font-bold text-gray-400">
                {company.name.charAt(0)}
              </span>
            )}
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{company.name}</h1>
            <p className="text-gray-500 mt-1">
              {company.industry} · {company.size} employees
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
            <button className="w-full sm:w-auto px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              Edit Profile
            </button>
            <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              View Public Profile
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              About Company
            </h2>
            <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line">
              {company.description}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Company Culture
            </h2>
            <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line">{company.culture}</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
              <h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
              <button className="w-full sm:w-auto px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg">
                Add Member
              </button>
            </div>

            <div className="grid gap-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      {member.avatar ? (
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-lg font-medium text-gray-600">
                          {member.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-500 truncate">
                        {member.role} · {member.department}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 ml-13 sm:ml-0">
                    Joined {new Date(member.joinDate).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Company Information
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Website</h3>
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mt-1 break-all text-sm"
                >
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  {company.website}
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900">Location</h3>
                <div className="flex items-start gap-2 mt-1 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="break-words">{company.locations[0].address}</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">Founded</h3>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  {new Date(company.createdAt).getFullYear()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
