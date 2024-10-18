

const About = () => {
    return (
        <div id="about">

            <section className="bg-gray-100 py-16 px-4 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        About Us
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        We are a Human Resource company dedicated to fostering better workplaces and empowering organizations to succeed with the right talent.
                    </p>
                </div>

                {/* Mission and Vision Section */}
                <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Mission */}
                    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-500">
                        <h3 className="text-2xl font-semibold text-blue-600">Our Mission</h3>
                        <p className="mt-4 text-gray-600 text-justify">
                            Our mission is to connect top talent with companies seeking innovative and driven employees. We aim to transform workplaces by providing customized HR solutions that foster growth, engagement, and development, creating lasting success for both employees and employers.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-500">
                        <h3 className="text-2xl font-semibold text-green-600">Our Vision</h3>
                        <p className="mt-4 text-gray-600 text-justify">
                            Our vision is to create workplaces where employees thrive, talent is nurtured, and businesses excel. We envision a future where organizations and individuals collaborate to create dynamic, inclusive, and high-performing work environments that benefit all.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About