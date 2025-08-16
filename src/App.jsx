import About from "./components/About"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Skills from "./components/Skills"


function App() {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contacts />
        <Footer />
    </div>
  )
}

export default App