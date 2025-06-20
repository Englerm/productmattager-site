// src/App.jsx
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ToolsAndSkills from './components/ToolsAndSkills'
import Portfolio from './components/Portfolio'
import Recommendations from './components/Recommendations'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <Header />
      <Hero />
      <About />
      <ToolsAndSkills />
      <Portfolio />
      <Recommendations />
      <Resume />
      <Contact />

      <footer className="py-6 bg-gray-50">
        <div className="container mx-auto px-6 text-center text-gray-600">
          © {new Date().getFullYear()} Matt Engler. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App