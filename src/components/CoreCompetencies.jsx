// src/components/CoreCompetencies.jsx
function CoreCompetencies() {
  const competencies = [
    "📺 Streaming Product Strategy",
    "📱 Cross-Platform UX (CTV, Mobile, Tablet, Vision Pro)",
    "🧠 AI-Augmented Workflows",
    "🔍 App Store Optimization (ASO) & Growth",
    "⚙️ Agile Product Development",
    "🧩 Partner Platform Integration (Apple, Amazon, Roku, etc.)",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Competencies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {competencies.map((competency, index) => (
            <div 
              key={index}
              className="p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              <p className="text-lg text-gray-700">{competency}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreCompetencies