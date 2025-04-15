const Navbar = () => {
    return (
      <nav className="p-4 flex justify-between items-center bg-white shadow-md fixed w-full top-0 z-50">
        <div className="text-xl font-bold">Abhinay<span className="text-red-500">.</span></div>
        <ul className="flex gap-6">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
  export default Navbar