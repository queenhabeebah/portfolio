import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"

function Footer() {
  return (
    <footer>
       <div className="social-media">
        <a href="https://github.com/queenhabeebah" className="social-icon" title="Habeebah Aleilo on GitHub" target="_blank"> <FaGithub size={30} color="#fff" /></a>
        <a href="https://linkedin.com/in/habeebah-aleilo" className="social-icon" title="Habeebah Aleilo on LinkedIn" target="_blank"> <FaLinkedin size={30} color="#0077B5" /></a>
        <a href="https://youtube.com/@thequeenofwebacademy" className="social-icon" title="Visit Habeebah Aleilo's YouTube channel" target="_blank"> <FaYoutube size={30} color="#FF0000" /></a>
        </div> 

        <p>© {new Date().getFullYear()} Habeebah Aleilo. All rights reserved.</p>
    </footer>
  )
}

export default Footer