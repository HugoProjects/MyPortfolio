import NavBar from './NavBar'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Footer from './Footer'
import Inspiration from './Inspiration'
import Contact from './Contact'
// import { useLayoutEffect } from 'react'

function App() {

  /* Forçar a página a carregar sempre no topo em vez de guardar o local (scroll) onde ficou (quando se faz refresh)
  // O useLayoutEffect corre antes de renderizar (ao contrário do useEffect)
  // Optei por fazer isto no index.html com um script no <head> para garantir que acontece antes de tudo o resto (react)
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  */

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
