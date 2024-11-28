export default function Companies() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Companies</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder company cards */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-16 h-16 bg-gray-200 rounded-lg mb-4"></div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Company {i}</h3>
            <p className="text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="text-sm text-gray-500">
              <span className="mr-4">50-200 employees</span>
              <span>Technology</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
