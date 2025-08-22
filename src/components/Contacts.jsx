import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

function Contacts() {
  return (
    <section id="contact" className="contact-info">
        <h3>Get in Touch</h3>
        <ul>
            <li><span>Email:</span> <a href="mailto:work.habeebahaleilo.dev@gmail.com" title="Shoot an email to Habeebah Aleilo" target="_blank">work.habeebahaleilo.dev@gmail.com</a></li>
            <li><span>GitHub:</span> <a href="https://github.com/queenhabeebah" title="Visit Habeebah Aleilo's GitHub" target="_blank">github.com/queenhabeebah</a></li>
            <li><span>LinkedIn:</span> <a href="https://linkedin.com/in/habeebah-aleilo" title="Visit Habeebah Aleilo on LinkedIn" target="_blank">linkedin.com/in/habeebah-aleilo</a></li>
        </ul>
    </section>
  )
}

export default Contacts