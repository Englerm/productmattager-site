// src/components/Experience.jsx
function Experience() {
  const experiences = [
    {
      role: 'Senior Product Manager',
      company: 'Tech Innovation Corp',
      period: '2021 - Present',
      description: 'Leading product strategy and development for enterprise SaaS platform'
    },
    {
      role: 'Product Manager',
      company: 'Digital Solutions Inc',
      period: '2018 - 2021',
      description: 'Managed full product lifecycle of mobile applications'
    },
    {
      role: 'Associate Product Manager',
      company: 'StartUp Tech',
      period: '2016 - 2018',
      description: 'Developed and launched new features for e-commerce platform'
    }
  ]

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Professional Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 h-full w-px bg-blue-200">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600"></div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                <div className="text-blue-600 font-medium mb-2">{exp.company}</div>
                <div className="text-gray-500 text-sm mb-3">{exp.period}</div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Resume Download Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Download My Resume</h3>
          <a
            href="/assets/files/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience