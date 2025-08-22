function Header() {
  return (
    <header>
        <h1>&#123;HA&#125;</h1>
        <nav>
            <ul>
                <li><a href="#about" title="Who is Habeebah Aleilo?">About</a></li>
                <li><a href="#skills" title="Habeebah Aleilo' skills">Skills</a></li>
                <li><a href="#projects" title="Habeebah Aleilo's projects">Projects</a></li>
                {/* <li><a href="#resume" title="Click to see my CV">Resume</a></li> */}
                <li><a href="#contact" title="Habeebah Aleilo's contact info">Contact</a></li>
                
            </ul>
        <a href="my-resume.pdf" download className="resume-btn">Download My CV</a>
        </nav>
    </header>
  )
}

export default Header