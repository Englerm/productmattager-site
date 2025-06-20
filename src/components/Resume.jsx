import React from 'react';

// Timeline item component
const TimelineItem = ({ company, title, achievements, icons }) => (
  <div className="relative pl-8 md:pl-16 pb-12 md:pb-16 last:pb-4 md:last:pb-8 mt-4">
    {/* Vertical line */}
    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
    
    {/* Company icons */}
    <div className="absolute left-[-28px] md:left-[-36px] top-0 flex flex-col gap-3">
      {icons.map((icon, index) => (
        <div key={index} className="w-12 h-12 rounded-xl bg-white border-2 border-blue-500 flex items-center justify-center p-1.5 shadow-sm hover:shadow-md transition-shadow duration-200">
          <img src={icon} alt={`${company} logo ${index + 1}`} className="w-full h-full object-contain rounded-lg" />
        </div>
      ))}
    </div>

    {/* Content */}
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{company}</h3>
      <h4 className="text-lg text-blue-600 font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-700 flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

function Resume() {
  const careerHistory = [
    {
      company: "NBA",
      title: "Senior Technical Product Manager",
      icons: ["/assets/images/companies/nba.png"],
      achievements: [
        "Leading development of a white-label streaming experience for the WNBA, covering UX for authentication, subscription, upsell, and VOD playback across CTV platforms",
        "Writing and managing stories across Roku, Fire TV, and Apple TV in collaboration with Engineering, QA, Design, and Program partners",
        "Championing the use of AI in product workflows by building tools to generate user stories from Figma and streamline design-to-dev handoff",
        "Prioritizing backlog and tech investment using fan insights, telemetry, and partner feedback, aligning short-term delivery with long-term scalability",
        "Acting as the connective tissue across engineering, UX, QA, and business teams, turning broad goals into shippable, fan-facing features"
      ]
    },
    {
      company: "Tubi",
      title: "Product Manager II, Growth",
      icons: ["/assets/images/companies/tubi.png"],
      achievements: [
        "Owned platform expansion across Amazon Fire TV, Apple Vision Pro, LG, Sony, TiVo, Verizon FiOS, and Vizio",
        "Led launch of Apple Vision Pro app, earning $150K+ in additional editorial support from Apple",
        "Drove App Store Optimization with demo-targeted, AI-powered store listings, resulting in a 23% CVR lift and #1 rankings across over 2 dozen priority terms",
        "Introduced A/B-tested onboarding flows, lifting early-session conversion by 19.1% and revenue by 2.23%",
        "Launched new Verizon FiOS app, generating over 600K hours of new viewership and an estimated 400K new viewers in the first six months",
        "Delivered platform-native features like Fire TV Continue Watching to improve retention and user experience"
      ]
    },
    {
      company: "Nickelodeon",
      title: "Manager → Senior Manager → Product Manager",
      icons: ["/assets/images/companies/nick.png", "/assets/images/companies/nick-jr.png"],
      achievements: [
        "Led product strategy and delivery across Nick and Nick Jr. AVOD apps",
        "Relaunched Nick Games app, increasing visit time by 18% and frequency by 12%, unlocking $125K–$250K in new annual ad revenue",
        "Integrated new MVPD partners and reduced auth friction, improving conversion",
        "Drove migration to centralized tech stack (PlayPlex), cutting engineering overhead",
        "Designed platform-first livestreams and COPPA-compliant search features",
        "Oversaw product ops and compliance across full Nick Digital portfolio",
        "Guided app teams through iOS ATT and Google Play's Teacher Approved program",
        "Acted as subject matter expert for cross-platform requirements and partner alignment"
      ]
    },
    {
      company: "Earlier Roles",
      title: "Associate Producer at Paramount Network • Senior Producer at Beamly",
      icons: ["/assets/images/companies/paramount.png", "/assets/images/companies/beamly.png"],
      achievements: [
        "Built and managed digital content strategies for major entertainment brands",
        "Led cross-functional teams in delivering engaging user experiences",
        "Developed and executed successful digital marketing campaigns"
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Download section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Career History</h2>
            <a
              href="/assets/files/resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
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
              Download Complete Resume
            </a>
          </div>

          {/* Timeline */}
          <div className="relative">
            {careerHistory.map((role, index) => (
              <TimelineItem
                key={index}
                company={role.company}
                title={role.title}
                achievements={role.achievements}
                icons={role.icons}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;