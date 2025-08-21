function Header() {
  return (
    <header>
        <h1>&#123;HA&#125;</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
                
            </ul>
        <a href="my-resume.pdf" download className="resume-btn">Download My CV</a>
        </nav>
    </header>
  )
}

export default Header