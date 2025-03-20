import profilePicRightCartoon from './assets/ProfilePic-Right-Cartoon.png';
import { ImReply } from "react-icons/im";
import { useState, useEffect } from "react";

const sections = ["aboutMe", "projects", "inspiration", "contact"];

const NavBar = () => {

  const [activeSection, setActiveSection] = useState("");

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
    <nav className="fixed top-0 left-0 w-full px-4 z-10">

      <div className="max-w-full sm:max-w-[85%] xl:max-w-[75%] mx-auto flex justify-between items-center h-20 bg-[#141419]">

        <div className="text-white text-2xl font-bold icon-pulsing">
          <a href="mailto:huguinhobastos@hotmail.com" className="flex items-center">
            <img src={profilePicRightCartoon} alt="Hire Me Button" className="h-16" />
            <p className="typing-effect text-2xl font-semibold text-blue-200 ml-4">Hire Me</p>
            <ImReply className="text-xl"/>
          </a>
        </div>

        <ul className="hidden md:flex justify-between gap-8 text-xl">
          <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "aboutMe" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
            <a href="#aboutMe" className="hover:text-gray-300 focus:text-gray-300">About Me</a>
          </li>
          <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "projects" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
            <a href="#projects" className="hover:text-gray-300 focus:text-gray-300">Projects</a>
          </li>
          <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "inspiration" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
            <a href="#inspiration" className="hover:text-gray-300 focus:text-gray-300">Inspiration</a>
          </li>
          <li className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] ${activeSection === "contact" ? "after:w-[33%]" : "after:w-[0%]" } after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[66%] focus-within:after:w-[66%]`}>
            <a href="#contact" className="hover:text-gray-300 focus:text-gray-300">Contact</a>
          </li>

          {/* <li className="relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] after:w-[0%] after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[50%]">
            <a href="#aboutMe" className="hover:text-gray-300">About Me</a>
          </li>
          <li className="relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] after:w-[0%] after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[50%]">
            <a href="#projects" className="hover:text-gray-300">Projects</a>
          </li>
          <li className="relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] after:w-[0%] after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[50%]">
            <a href="#inspiration" className="hover:text-gray-300">Inspiration</a>
          </li>
          <li className="relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[25%] after:h-[1px] after:w-[0%] after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent after:transition-[width] after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-[50%]">
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </li> */}
        </ul>

        <div className="md:hidden flex">
          <button className='group'>
            <span className="block w-6 h-1 bg-white group-hover:bg-gray-300 group-focus:bg-gray-300"></span>
            <span className="block w-6 h-1 bg-white group-hover:bg-gray-300 group-focus:bg-gray-300 mt-1 mb-1"></span>
            <span className="block w-6 h-1 bg-white group-hover:bg-gray-300 group-focus:bg-gray-300"></span>
          </button>
        </div>

      </div>
    </nav>
  )
}

export default NavBar