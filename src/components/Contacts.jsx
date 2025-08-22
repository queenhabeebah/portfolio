import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

function Contacts() {
  return (
    <section id="contact" className="contact-info">
        <h3>Get in Touch</h3>
        <ul>
            <li><span>Email:</span> <a href="mailto:work.habeebahaleilo.dev@gmail.com" target="_blank">habeebahaleilo@gmail.com</a></li>
            <li><span>GitHub:</span> <a href="https://github.com/queenhabeebah" target="_blank">github.com/queenhabeebah</a></li>
            <li><span>LinkedIn:</span> <a href="https://linkedin.com/in/habeebah-aleilo" target="_blank">linkedin.com/in/habeebah-aleilo</a></li>
        </ul>
    </section>
  )
}

export default Contacts