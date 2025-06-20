function Header() {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">PM Portfolio</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#tools-and-skills" className="text-gray-600 hover:text-gray-900">Skills & Tools</a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a>
            <a href="#recommendations" className="text-gray-600 hover:text-gray-900">Recommendations</a>
            <a href="#resume" className="text-gray-600 hover:text-gray-900">Resume</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header