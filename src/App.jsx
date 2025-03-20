import NavBar from './NavBar'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Footer from './Footer'
import Inspiration from './Inspiration'
import Contact from './Contact'

function App() {

  return (
    <div className="container max-w-full sm:max-w-[85%] xl:max-w-[75%] mx-auto px-4">
      <NavBar />
      <AboutMe />
      <Projects />
      <Inspiration />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
