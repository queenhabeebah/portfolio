import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"

function Footer() {
  return (
    <footer>
       <div className="social-media">
        <a href="https://github.com/queenhabeebah" className="social-icon" target="_blank"> <FaGithub size={30} color="#000000" /></a>
        <a href="https://linkedin.com/in/habeebah-aleilo" className="social-icon" target="_blank"> <FaLinkedin size={30} color="#0077B5" /></a>
        <a href="https://youtube.com/@thequeenofwebacademy" className="social-icon" target="_blank"> <FaYoutube size={30} color="#FF0000" /></a>
        </div> 

        <div>
            <p>Designed and developed by <a href="mailto:work.habeebahaleilo.dev@gmail.com">Habeebah Aleilo</a></p>
        </div>
    </footer>
  )
}

export default Footer