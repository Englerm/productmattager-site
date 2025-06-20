// src/components/QuickHits.jsx
function QuickHits() {
  const highlights = [
    "Thrive in testing-driven orgs",
    "Excel at strategic collaboration",
    "Believe great UX beats flashy features",
    "Use AI to ship faster (not just to look clever)",
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">⚡ Quick Hits</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {highlights.map((hit, index) => (
            <li 
              key={index}
              className="flex items-center space-x-3 text-gray-700"
            >
              <span className="text-blue-600 text-xl">•</span>
              <span>{hit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default QuickHits