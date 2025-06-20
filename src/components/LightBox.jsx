// src/components/LightBox.jsx
import { useEffect } from 'react'
import PropTypes from 'prop-types'

function LightBox({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
          <p className="text-lg text-gray-600 mb-6">{project.summary}</p>
          
          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Challenge</h3>
              <p className="text-gray-700">{project.challenge}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Action</h3>
              <div className="space-y-2">
                {project.action.map((item, index) => (
                  <p key={index} className="text-gray-700">{item}</p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Results</h3>
              <ul className="list-none space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="text-gray-700">{result}</li>
                ))}
              </ul>
            </div>

            {project.quote && (
              <div className="border-l-4 border-blue-500 pl-4 py-2 mb-8">
                <p className="text-gray-700 italic mb-2">"{project.quote.text}"</p>
                <p className="text-gray-600">— {project.quote.author}, {project.quote.role}</p>
              </div>
            )}
            
            {project.image && (
              <div className="mt-8 border-t pt-8">
                <img src={project.image} alt={project.imageAlt} className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

LightBox.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    summary: PropTypes.string.isRequired,
    challenge: PropTypes.string.isRequired,
    action: PropTypes.arrayOf(PropTypes.string).isRequired,
    results: PropTypes.arrayOf(PropTypes.string).isRequired,
    quote: PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired
}

export default LightBox