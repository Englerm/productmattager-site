// src/components/ToolsAndSkills.jsx
function ToolsAndSkills() {
  return (
    <section id="tools-and-skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Tools & Tech Column */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Tools & Tech</h2>
            <div className="text-lg text-gray-600 leading-relaxed">
              Jira • Confluence • Figma • Miro • Notion • ChatGPT • Partner Consoles (Apple, Amazon, Google, Roku, etc.)
            </div>
          </div>

          {/* Skills Column */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
            <div className="text-lg text-gray-600 leading-relaxed">
              Product Growth • CTV & Platform Strategy • AI-Augmented Workflows • Cross-Platform UX • Agile Execution • Team Leadership
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ToolsAndSkills