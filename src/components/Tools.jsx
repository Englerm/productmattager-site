// src/components/Tools.jsx
function Tools() {
  const sections = [
    {
      title: "Tools",
      items: [
        "Jira",
        "Confluence",
        "Figma",
        "Miro",
        "Notion",
        "Shortcut",
        "Trello",
        "Basecamp",
        "Easy Retro",
        "Lucid"
      ]
    },
    {
      title: "Platforms & Tech",
      items: [
        "Partner App Consoles (Apple, Amazon, Google, Roku, Vizio, LG, TiVo)",
        "ChatGPT",
        "Gemini",
        "NotebookLM"
      ]
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <span className="text-blue-600">▹</span>
                    <span>{item}</span>
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

export default Tools