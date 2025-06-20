// src/components/Portfolio.jsx
import { useState } from 'react'
import LightBox from './LightBox'

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "Nick Games App Relaunch",
      image: "/assets/images/portfolio/nick-games.png",
      imageAlt: "Nick Games App tablet interface showing colorful games and characters",
      summary: "Reimagined the mobile app experience to reignite engagement and boost monetization.",
      challenge: "The post-migration Nickelodeon app was technically improved but UX-degraded. Kids were confused. Parents were frustrated. Ratings and retention were falling.",
      action: [
        "Led user research (from app store reviews to kitchen-table testing with my own kids), identifying three issues:",
        "• Frustration from forced portrait mode",
        "• Navigation too complex for non-readers",
        "• Removed games & missing \"surprise and delight\"",
        "Developed a 3-part solution:",
        "• Flexible screen orientation",
        "• Rebuilt games functionality with weekly manual rotation",
        "• Simplified and gamified UX tailored to kids"
      ],
      results: [
        "+18% time spent per visitor",
        "+12% improvement in visit frequency",
        "Significantly improved app store ratings",
        "Estimated +$125K–$250K in annual ad revenue",
        "Restored clarity and value prop to the platform"
      ],
      quote: {
        text: "What sets Matt apart is his deep technical expertise. He not only understands the intricacies of engineering but also knows how to communicate them effectively to non-technical stakeholders. This rare blend of technical acumen and communication skills allows him to bridge the often-daunting gap between product and engineering effortlessly. Matt ensures that every team member, regardless of their background, is aligned and working toward a common goal.",
        author: "Adrian Cireasa",
        role: "Project Manager and Scrum Master at Nickelodeon"
      }
    },
    {
      title: "Tubi Fire TV Channel Expansion",
      image: "/assets/images/portfolio/fire-tv.png",
      imageAlt: "Tubi Fire TV interface showing expanded channel lineup",
      summary: "Eliminated a technical bottleneck to unlock traffic, revenue, and user satisfaction.",
      challenge: "The Live Tab on Fire TV had low traffic. Only 50 of 250 available channels were live due to missing Gracenote IDs — a critical ingest limitation for Amazon.",
      action: [
        "• Audited Gracenote availability across all channels",
        "• Removed non-performing, non-ID channels",
        "• Prioritized top performers from other platforms",
        "• Communicated tradeoffs and secured stakeholder buy-in",
        "• Executed rollout quickly (no backend testing possible) while maintaining trust via regular updates"
      ],
      results: [
        "+20% traffic growth",
        "Direct ad revenue lift",
        "Stronger partner relationship with Amazon",
        "Improved user satisfaction and engagement"
      ],
      quote: {
        text: "Whether it was engaging with stakeholders, negotiating priorities, or providing updates to leadership, he did so with confidence and clarity.",
        author: "Ben Clissen",
        role: "Senior Technical Project Manager and Scrum Master at Nickelodeon"
      }
    },
    {
      title: "Tubi Apple Vision Pro Launch",
      image: "/assets/images/portfolio/Tubi Vision Pro.png",
      imageAlt: "Tubi app interface on Apple Vision Pro showing immersive viewing experience",
      summary: "Stepped up mid-crunch to drive a successful new-platform launch with a top-tier partner.",
      challenge: "When approval to move forward came through, our senior-most PM was offline. A leadership vacuum threatened our delivery to Apple — one of our most important partners.",
      action: [
        "• Audited past notes, requirements, and gaps",
        "• Held syncs across time zones (including Beijing engineering)",
        "• Rewrote the GTM plan to align with Apple's expectations",
        "• Created a new cross-functional workback schedule",
        "• Managed conflicting input over storefront visuals and ran an A/B test to resolve",
        "• Held weekly alignment meetings and tracked every milestone"
      ],
      results: [
        "On-time Vision Pro launch",
        "+$150K in Apple editorial promotional value",
        "Strengthened partnership despite internal churn",
        "Platform learnings applicable to other spatial experiences"
      ],
      quote: {
        text: "Matthew led experiments to improve conversion metrics on our various app stores, leading ideation & pressure-testing creative theories. As Tubi expands to new locations across the globe, we have Matthew to thank for laying the foundation of our efforts to improve our app store listings across Smart TVs and Mobile.",
        author: "Dan Bowman",
        role: "Product Growth at Tubi"
      }
    }
  ]

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Portfolio Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.summary}</p>
              <div className="text-blue-600">{project.results[0]}</div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <LightBox
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Portfolio