import profilePicLeft from './assets/ProfilePic-Left.png';
import MemeGlasses from './assets/MemeGlasses.png';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaSass, FaReact, FaGit, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="min-h-screen pt-20 pb-20 md:pb-10 flex flex-col-reverse justify-center md:flex-row md:justify-between items-center gap-2 md:gap-10">
      <div className='flex flex-col justify-center items-center md:items-start'>
        <p>
          <span className="opacity-50 block">My name is</span>
          <span className="text-4xl font-semibold text-blue-200">Hugo Bastos</span>. I am a nice guy, and among many other things, I'm also a <span className='text-yellow-600 font-semibold'>Web Developer</span>.
          <br/>
          I graduated with a bachelor's degree in Computer Engineering from <a href="https://www.isep.ipp.pt" target="_blank" rel="noopener noreferrer"><abbr title="Instituto Superior de Engenharia do Porto">ISEP</abbr></a> and I have been actively enhancing my web dev skills through various online courses.
          <br/>
          Originally from Porto, Portugal, I am currently based in London, United Kingdom, and open to new opportunities. Feel free to check my <a href="https://www.linkedin.com/in/hugo-bastos-engineer/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline focus:underline">Social Profile <FiExternalLink /></a>.
        </p>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-10 w-[50%]"></div>

        <p className="text-xl mb-6">The technologies I use:</p>

        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-5xl">
          <div className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaHtml5 className="text-[rgb(227,79,38)]"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(227,79,38,0)] via-[rgb(227,79,38)] to-[rgba(227,79,38,0)] text-transparent bg-clip-text">
              HTML
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaCss3Alt className="text-[rgb(21,114,182)]" title="CSS"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(21,114,182,0)] via-[rgb(21,114,182)] to-[rgba(21,114,182,0)] text-transparent bg-clip-text">
              CSS
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaJsSquare className="text-[rgb(247,223,30)]" title="JavaScript"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(247,223,30,0)] via-[rgb(247,223,30)] to-[rgba(247,223,30,0)] text-transparent bg-clip-text">
              JavaScript
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaSass className="text-[rgb(204,102,153)]" title="Sass"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(204,102,153,0)] via-[rgb(204,102,153)] to-[rgba(204,102,153,0)] text-transparent bg-clip-text">
              Sass
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <SiTailwindcss className="text-[rgb(56,178,172)]" title="Tailwind CSS"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(56,178,172,0)] via-[rgb(56,178,172)] to-[rgba(56,178,172,0)] text-transparent bg-clip-text">
              Tailwind
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <SiTypescript className="text-[rgb(49,120,198)]" title="TypeScript"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(49,121,198,0)] via-[rgb(49,121,198)] to-[rgba(49,121,198,0)] text-transparent bg-clip-text">
              TypeScript
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaReact className="text-[rgb(97,218,251)]" title="React"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(97,218,251,0)] via-[rgb(97,218,251)] to-[rgba(97,218,251,0)] text-transparent bg-clip-text">
              React
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaGit className="text-[rgb(240,80,50)]" title="Git"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(240,80,50,0)] via-[rgb(240,80,50)] to-[rgba(240,80,50,0)] text-transparent bg-clip-text">
              Git
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaGithub className="text-[rgb(240,230,230)]" title="Github"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(240,230,230,0)] via-[rgb(240,230,230)] to-[rgba(240,230,230,0)] text-transparent bg-clip-text">
              Github
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaFigma className="text-[#fd6565]" title="Figma"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(114,194,132,0)] via-[rgb(114,194,132)] to-[rgba(114,194,132,0)] text-transparent bg-clip-text">
              Figma
            </span>
          </div>
        </div>
      </div>

      <img src={profilePicLeft} alt='Hugo Bastos Profile Picture' className='w-24 sm:w-32 md:w-48 lg:w-64'/>
      <img src={MemeGlasses} alt='Meme Sunglasses' className='meme w-10 sm:w-16 md:w-20 lg:w-24'/>
      

    </section>
  )
}

export default AboutMe