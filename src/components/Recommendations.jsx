// src/components/Recommendations.jsx
function Recommendations() {
  const testimonials = [
    {
      text: "I had the pleasure of working closely with Matt, and I can confidently say that he is one of the most exceptional product managers I've encountered. His ability to navigate the complexities of product development while maintaining a clear focus on the user and business goals is truly remarkable. Beyond his technical prowess, Matt's leadership style fosters trust and collaboration. He is deeply respected and well-loved by his colleagues, who admire his ability to balance decisiveness with empathy. Working with Matt means knowing that projects will not only get done but will be done exceptionally well. I wholeheartedly recommend Matt as a product manager who inspires teams, drives results, and bridges gaps in ways that very few can. He would be an invaluable asset to any organization.",
      author: "Adrian Cireasa",
      role: "Project Manager @Nickelodeon"
    },
    {
      text: "I had the pleasure of working closely with Matt at both Tubi and Nickelodeon, and I can confidently recommend him as an exceptional Product Manager. At Tubi, he demonstrated his ability to drive significant results with key partners like Amazon and Apple. He was also a positive force for collaboration with internal teams whether they be Design and Growth for App Store Optimization or International and Legal for the UK Launch and Brand Refresh. Moreover, he never shied away from a challenge, happily stepping up to lead when there was a vacuum like shepherding the launch on Vision Pro across the finish line or expanding Tubi's footprint on Verizon FiOS. Matt would be a wonderful asset to any Product Management team, where he would continue to lead from experience with empathy for both the end user and for his teammates.",
      author: "David Golan",
      role: "Senior Product Manager @Tubi"
    },
    {
      text: "Matthew is an exceptional Product Manager! He led me onto new projects with grace and was open to new ideas. As a designer, I relied on information that would help develop better designs and Matthew was a pivotal point of contact for all creative needs. His communication and collaborative efforts really refined our design process making him an absolute joy to work with!",
      author: "Rebecca Laval",
      role: "Product Design @Tubi"
    },
    {
      text: "Matthew led experiments to improve conversion metrics on our various app stores, leading ideation & pressure-testing creative theories. As Tubi expands to new locations across the globe, we have Matthew to thank for laying the foundation of our efforts to improve our app store listings across Smart TVs and Mobile. Matthew and I worked closely on these projects, and I highly recommend him.",
      author: "Dan Bowman",
      role: "Product Growth @Tubi"
    },
    {
      text: "[Matt's] ability to clearly articulate the product vision was instrumental in aligning our team. [He was] excellent in breaking down complex features into actionable stories and empowering developers to do their best work. Whether it was engaging with stakeholders, negotiating priorities, or providing updates to leadership, he did so with confidence and clarity. I highly recommend Matt for any product manager role, knowing he will bring the same excellence and energy to his next opportunity.",
      author: "Ben Clissen",
      role: "Senior Technical Project Manager @Paramount Global"
    },
    {
      text: "Matt created very clear and well documented tickets, we had multiple meetings where we discussed every new feature, he was ready to jump on a call any time we had misunderstandings and he had a very positive attitude. He will bring a lot of value to any team he is going to be a part of through his vast experience and knowledge, but also kindness and patience.",
      author: "Diana Daia",
      role: "iOS Software Engineer @Cognizant Softvision/Nickelodeon"
    }
  ]

  return (
    <section id="recommendations" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Recommendations
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-all"
            >
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-blue-600">{testimonial.author}</p>
                <p className="text-blue-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recommendations