// src/components/Skills.jsx
function Skills() {
  const skillCategories = [
    {
      title: "📈 Product Execution & Growth",
      skills: [
        "App Store Optimization (ASO)",
        "Conversion Rate Optimization",
        "A/B Testing & Experimentation",
        "KPI-Driven Iteration"
      ]
    },
    {
      title: "📺 Platform & Device Strategy",
      skills: [
        "Connected TV (Roku, Fire TV, Apple TV)",
        "Cross-Platform UX Strategy",
        "Localization & Global Readiness",
        "White-Label Streaming Solutions"
      ]
    },
    {
      title: "🤝 Team & Stakeholder Leadership",
      skills: [
        "Cross-Functional Collaboration",
        "Executive Communication",
        "Agile / Scrum",
        "Roadmap Development"
      ]
    },
    {
      title: "🧠 AI Product Development & Prototyping",
      skills: [
        "GPT-Integrated Tooling",
        "User Story Generation from Figma",
        "AI-Powered Storytelling",
        "Workflow Automation"
      ]
    }
  ]

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills