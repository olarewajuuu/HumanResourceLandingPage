

const Services = () => {
  return (
    <div id="services">
      <section className="bg-white py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We provide a range of HR services tailored to meet the needs of businesses of all sizes. From talent acquisition to employee development, we’re here to support your growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-500">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 mb-4">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 11V17M9 14H15M4 6H16M4 10H16M4 14H7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-600">Talent Acquisition</h3>
            <p className="mt-4 text-gray-600">
              We help businesses find the right talent with our thorough recruitment processes, ensuring you have access to top candidates who fit your culture and goals.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-500">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-600 mb-4">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20 12H4M12 6V18" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-green-600">Employee Development</h3>
            <p className="mt-4 text-gray-600">
              Our employee training and development programs are designed to help your team grow and excel, increasing productivity and satisfaction.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-500">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-600 mb-4">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 9L12 15L18 9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-red-600">Performance Management</h3>
            <p className="mt-4 text-gray-600">
              We provide tools and frameworks to manage employee performance effectively, ensuring that your team is always aligned with business objectives.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-500">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-600 mb-4">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12L12 5L19 12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-600">HR Consulting</h3>
            <p className="mt-4 text-gray-600">
              Our HR consulting services are tailored to your organization’s unique needs, from compliance to organizational strategy, helping you stay ahead of challenges.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-500">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-500 mb-4">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5V19M5 9H19" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-yellow-500">Compensation & Benefits</h3>
            <p className="mt-4 text-gray-600">
              We offer insights and guidance on competitive compensation and benefits packages to help you attract and retain top talent.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-500">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-600 mb-4">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 5L12 19M5 12H19" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-indigo-600">Workforce Planning</h3>
            <p className="mt-4 text-gray-600">
              Our workforce planning services ensure you have the right people in the right roles at the right time, helping you optimize your team’s productivity.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services