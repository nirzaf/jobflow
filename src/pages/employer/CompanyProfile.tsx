import { mockCompany, mockTeamMembers } from '../../data/employerMockData';
import { Globe, Linkedin, Twitter, Facebook, MapPin } from 'lucide-react';

export default function CompanyProfile() {
  const company = mockCompany;
  const teamMembers = mockTeamMembers;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="relative h-48 rounded-lg bg-gray-200 mb-4">
          {company.banner && (
            <img
              src={company.banner}
              alt="Company Banner"
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>

        <div className="flex items-start gap-6">
          <div className="w-32 h-32 bg-white rounded-lg shadow-sm border border-gray-200 -mt-16 relative z-10 flex items-center justify-center p-2">
            {company.logo ? (
              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-3xl font-bold text-gray-400">
                {company.name.charAt(0)}
              </span>
            )}
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
            <p className="text-gray-500 mt-1">
              {company.industry} · {company.size} employees
            </p>
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              Edit Profile
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              View Public Profile
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              About Company
            </h2>
            <p className="text-gray-600 whitespace-pre-line">
              {company.description}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Company Culture
            </h2>
            <p className="text-gray-600 whitespace-pre-line">{company.culture}</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
              <button className="text-blue-600 hover:text-blue-800">
                Add Member
              </button>
            </div>

            <div className="grid gap-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
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
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {member.role} · {member.department}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Joined {new Date(member.joinDate).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
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
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mt-1"
                >
                  <Globe className="w-4 h-4" />
                  {company.website}
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Social Media
                </h3>
                <div className="flex gap-4 mt-2">
                  {company.socialMedia.linkedin && (
                    <a
                      href={company.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {company.socialMedia.twitter && (
                    <a
                      href={company.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-400"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {company.socialMedia.facebook && (
                    <a
                      href={company.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-800"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">Locations</h3>
                <div className="space-y-2 mt-2">
                  {company.locations.map((location) => (
                    <div
                      key={location.id}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">
                          {location.type}
                          {location.isPrimary && (
                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              Primary
                            </span>
                          )}
                        </p>
                        <p className="text-sm">
                          {location.address}, {location.city}, {location.country}{' '}
                          {location.postalCode}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Verification Status
            </h2>
            <div
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                company.verificationStatus === 'Verified'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {company.verificationStatus}
            </div>
            {company.verificationStatus !== 'Verified' && (
              <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Complete Verification
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
