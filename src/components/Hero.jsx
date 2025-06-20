// src/components/Hero.jsx
function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
          Matt Engler
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-4">
          Product Mattager
        </h2>
        <p className="text-xl md:text-2xl text-blue-600 max-w-3xl mx-auto">
          If it's got a screen, I've made it stream better.
        </p>
      </div>
    </section>
  )
}

export default Hero