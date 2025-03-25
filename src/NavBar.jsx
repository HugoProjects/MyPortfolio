import profilePicRightCartoon from './assets/ProfilePic-Right-Cartoon.png';
import { ImReply } from "react-icons/im";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = ["aboutMe", "projects", "inspiration", "contact"];

const NavBar = () => {

  const [activeSection, setActiveSection] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY; //Posiçao do scroll no eixo dos Y

      for (let id of sections) {
        const section = document.getElementById(id);

        if (section) {
          const offsetTop = section.offsetTop; //Distancia do elemento ate ao topo da página
          const offsetHeight = section.offsetHeight; //Altura do elemento

          //(Dar 80px de margin por causa da NavBar fixa, e mais 40 extra para a section não mudar só mesmo em cima da nova section)
          if (scrollPosition > offsetTop - 80 - 40 && scrollPosition < offsetTop + offsetHeight - 80 - 40) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{opacity:0, y: -50}}
      animate={{opacity:1, y: 0}}
      transition={{duration: 0.5, delay: 4}}
      className="fixed top-0 left-0 right-0 z-20 max-w-full sm:max-w-[85%] xl:max-w-[75%] mx-auto"
    >

      <div className="flex justify-between items-center h-20 bg-[#141419] px-4">
        <div className="text-white text-2xl font-bold icon-pulsing">
          <a href="#contact" className="flex items-center">
            <img src={profilePicRightCartoon} alt="Hire Me Button" className="h-16" />
            <p className="typing-effect text-2xl font-semibold text-blue-200 ml-4">Hire Me</p>
            <ImReply className="text-xl"/>
          </a>
        </div>

        <ul className="hidden md:flex justify-between gap-8 text-xl">
          <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "aboutMe" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
            <a href="#aboutMe" className="hover:text-gray-300 focus-visible:text-gray-300">About Me</a>
          </li>
          <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "projects" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
            <a href="#projects" className="hover:text-gray-300 focus-visible:text-gray-300">Projects</a>
          </li>
          <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "inspiration" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
            <a href="#inspiration" className="hover:text-gray-300 focus-visible:text-gray-300">Inspiration</a>
          </li>
          <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "contact" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
            <a href="#contact" className="hover:text-gray-300 focus-visible:text-gray-300">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu com traços normais */}
        {/* <div className="md:hidden flex">
          <button className="group" aria-label="Menu" onClick={() => setMobileMenu(!mobileMenu)}>
            <span className={`block w-6 h-1 bg-white group-hover:bg-gray-300 group-focus-visible:bg-gray-300 ${mobileMenu ? "rotate-45 translate-y-1/2" : ""} transition-transform duration-300`}></span>
            <span className={`block w-6 h-1 bg-white group-hover:bg-gray-300 group-focus-visible:bg-gray-300 mt-1 mb-1 ${mobileMenu ? "hidden" : ""}`}></span>
            <span className={`block w-6 h-1 bg-white group-hover:bg-gray-300 group-focus-visible:bg-gray-300 ${mobileMenu ? "-rotate-45 -translate-y-1/2" : ""} transition-transform duration-300`}></span>
          </button>
        </div> */}

        {/* Mobile Menu com os divisores usados ao longo da página (mas com cor branca)*/}
        <div className="md:hidden flex">
          <button className="group w-8" aria-label="Menu" onClick={() => setMobileMenu(!mobileMenu)}>
            <div className={`h-1 bg-gradient-to-r from-transparent via-white to-transparent ${mobileMenu ? "rotate-45 translate-y-1/2" : ""} transition-transform duration-300`}></div>
            <div className={`bg-gradient-to-r from-transparent via-white to-transparent ${mobileMenu ? "h-0 my-0" : "h-1 my-1"} transition-all duration-300`}></div>
            <div className={`h-1 bg-gradient-to-r from-transparent via-white to-transparent ${mobileMenu ? "-rotate-45 -translate-y-1/2" : ""} transition-transform duration-300`}></div>
          </button>
        </div>
      </div>

      {/* Sidebar menu para o mobile, abrir com o hamburguer menu  */}
      {/* {mobileMenu &&
      <div className="relative flex justify-end min-h-screen">
        <ul className={`md:hidden flex flex-col items-end gap-8 text-xl z-10 bg-[#141419] opacity-95 sticky -right-96 top-20 bottom-0 pr-4 pl-8 ${mobileMenu ? "right-0" : ""} transition-all duration-300 `}>
          <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "aboutMe" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
            <a href="#aboutMe" className="hover:text-gray-300 focus-visible:text-gray-300" onClick={() => setMobileMenu(false)}>About Me</a>
          </li>
          <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "projects" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
            <a href="#projects" className="hover:text-gray-300 focus-visible:text-gray-300" onClick={() => setMobileMenu(false)}>Projects</a>
          </li>
          <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "inspiration" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
            <a href="#inspiration" className="hover:text-gray-300 focus-visible:text-gray-300" onClick={() => setMobileMenu(false)}>Inspiration</a>
          </li>
          <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "contact" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
            <a href="#contact" className="hover:text-gray-300 focus-visible:text-gray-300" onClick={() => setMobileMenu(false)}>Contact</a>
          </li>
        </ul>
      </div>
      } */}

      {/* Fullbar menu para o mobile, abrir com o hamburguer menu  */}
      <ul className={`md:hidden flex flex-col items-center justify-center gap-12 text-2xl -z-10 bg-[#141419] opacity-95 fixed w-full left-0 px-4 py-6 ${mobileMenu ? "top-20 bottom-0" : "-top-full bottom-full"} transition-all duration-300 ease-in-out`}>
        <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "aboutMe" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
          <a href="#aboutMe" className="hover:text-gray-300 focus-visible:text-gray-300" onClick={() => setMobileMenu(false)}>About Me</a>
        </li>
        <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "projects" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
          <a href="#projects" className="hover:text-gray-300 focus-visible:text-gray-300" onClick={() => setMobileMenu(false)}>Projects</a>
        </li>
        <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "inspiration" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
          <a href="#inspiration" className="hover:text-gray-300 focus-visible:text-gray-300" onClick={() => setMobileMenu(false)}>Inspiration</a>
        </li>
        <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "contact" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
          <a href="#contact" className="hover:text-gray-300 focus-visible:text-gray-300" onClick={() => setMobileMenu(false)}>Contact</a>
        </li>
      </ul>

    </motion.nav>
  )
}

export default NavBar