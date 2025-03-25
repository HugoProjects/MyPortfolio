import profilePicLeft from './assets/ProfilePic-Left.png';
import MemeGlasses from './assets/MemeGlasses.png';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaSass, FaReact, FaGit, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
// import { useState } from 'react';

const AboutMe = () => {

  const isMobile = window.innerWidth <= 768; //Detetar inicialmente se é um dispositivo mobile (para a animaçao de entrada)

  //const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  /*Detectar a largura da tela (não preciso de continuar a atualizar o isMobile porque não o vou usar em mais nenhum momento)
  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px para sm width breakpoint (se for menor que 768 consideramos true, sendo um dispositivo mobile)
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Chama logo de início para saber a width inicial e fica o eventListener para ir checkando

    return () => window.removeEventListener('resize', handleResize);
  }, []);*/

  const techListVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { delayChildren: 1.7, staggerChildren: 0.2 } // Delay entre os filhos
    }
  };
  
  const techsVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="aboutMe" className="min-h-screen pt-20 pb-24 md:pb-10 flex flex-col-reverse justify-center items-center gap-2 md:flex-row md:justify-between md:gap-10">
      <div className='flex flex-col justify-center items-center md:items-start'>

        <motion.p
          initial={isMobile ? {opacity:0, y: -75, x:0} : {opacity:0, x: -200, y:0}}
          animate={{opacity:1, y: 0, x:0}}
          transition={{duration: 0.5, delay: 0.7}}
        >
          <span className="opacity-50 block">My name is</span>
          <span className="text-4xl font-semibold text-blue-200">Hugo Bastos</span>. I am a nice guy, and among many other things, I'm also a <span className='text-yellow-600 font-semibold'>Web Developer</span>.
          <br/>
          I graduated with a bachelor's degree in Computer Engineering from <a href="https://www.isep.ipp.pt" target="_blank" rel="noopener noreferrer"><abbr title="Instituto Superior de Engenharia do Porto">ISEP</abbr></a> and I have been actively enhancing my web dev skills through various online courses.
          <br/>
          Originally from Porto, Portugal, I am currently based in London, United Kingdom, and open to new opportunities. Feel free to check my <a href="https://www.linkedin.com/in/hugo-bastos-engineer/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline focus:underline">Social Profile <FiExternalLink /></a>.
        </motion.p>

        <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration: 0.5, delay: 1.3}}
          className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-10 w-[50%]">
        </motion.div>

        <motion.p 
          initial={{opacity:0, y: 25}}
          animate={{opacity:1, y: 0}}
          transition={{duration: 0.5, delay: 1.5}}
          className="text-xl mb-6"
        >The technologies I use:
        </motion.p>

        <motion.div
          variants={techListVariants} 
          initial="hidden" 
          animate="show" // Ativa o show dos filhos tambem
          className="flex flex-wrap justify-center md:justify-start gap-6 text-5xl"
        >
          <motion.div variants={techsVariants} className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaHtml5 className="text-[rgb(227,79,38)]"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(227,79,38,0)] via-[rgb(227,79,38)] to-[rgba(227,79,38,0)] text-transparent bg-clip-text">
              HTML
            </span>
          </motion.div>
          <motion.div variants={techsVariants} className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaCss3Alt className="text-[rgb(21,114,182)]" title="CSS"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(21,114,182,0)] via-[rgb(21,114,182)] to-[rgba(21,114,182,0)] text-transparent bg-clip-text">
              CSS
            </span>
          </motion.div>
          <motion.div variants={techsVariants} className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaJsSquare className="text-[rgb(247,223,30)]" title="JavaScript"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(247,223,30,0)] via-[rgb(247,223,30)] to-[rgba(247,223,30,0)] text-transparent bg-clip-text">
              JavaScript
            </span>
          </motion.div>
          <motion.div variants={techsVariants} className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaSass className="text-[rgb(204,102,153)]" title="Sass"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(204,102,153,0)] via-[rgb(204,102,153)] to-[rgba(204,102,153,0)] text-transparent bg-clip-text">
              Sass
            </span>
          </motion.div>
          <motion.div variants={techsVariants} className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <SiTailwindcss className="text-[rgb(56,178,172)]" title="Tailwind CSS"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(56,178,172,0)] via-[rgb(56,178,172)] to-[rgba(56,178,172,0)] text-transparent bg-clip-text">
              Tailwind
            </span>
          </motion.div>
          <motion.div variants={techsVariants} className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <SiTypescript className="text-[rgb(49,120,198)]" title="TypeScript"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(49,121,198,0)] via-[rgb(49,121,198)] to-[rgba(49,121,198,0)] text-transparent bg-clip-text">
              TypeScript
            </span>
          </motion.div>
          <motion.div variants={techsVariants} className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaReact className="text-[rgb(97,218,251)]" title="React"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(97,218,251,0)] via-[rgb(97,218,251)] to-[rgba(97,218,251,0)] text-transparent bg-clip-text">
              React
            </span>
          </motion.div>
          <motion.div variants={techsVariants} className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaGit className="text-[rgb(240,80,50)]" title="Git"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(240,80,50,0)] via-[rgb(240,80,50)] to-[rgba(240,80,50,0)] text-transparent bg-clip-text">
              Git
            </span>
          </motion.div>
          <motion.div variants={techsVariants} className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaGithub className="text-[rgb(240,230,230)]" title="Github"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(240,230,230,0)] via-[rgb(240,230,230)] to-[rgba(240,230,230,0)] text-transparent bg-clip-text">
              Github
            </span>
          </motion.div>
          <motion.div variants={techsVariants} className="flex flex-col items-center justify-center gap-1 icon-shadow">
            <FaFigma className="text-[#fd6565]" title="Figma"/>
            <span className="text-base font-semibold bg-gradient-to-b from-[rgba(114,194,132,0)] via-[rgb(114,194,132)] to-[rgba(114,194,132,0)] text-transparent bg-clip-text">
              Figma
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* <div className='relative heroImage'>
        <img src={profilePicLeft} alt='Hugo Bastos Profile Picture' className='max-w-none w-24 sm:w-32 md:w-48 lg:w-64'/>
        <img src={MemeGlasses} alt='Meme Sunglasses' className='absolute max-w-none w-8 sm:w-10 md:w-16 lg:w-24 top-[26px] left-[28px] sm:top-[35px] sm:left-[37px] md:top-[53px] md:left-[55px] lg:top-[70px] lg:left-[67px] meme'/>
      </div> */}

      <motion.div 
        className='relative heroImage'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 1.25, delay: 0.1}}
      >
        <img src={profilePicLeft} alt='Hugo Bastos Profile Picture' className='max-w-none w-24 sm:w-32 md:w-48 lg:w-64'/>
        <img src={MemeGlasses} alt='Meme Sunglasses' className='absolute max-w-none w-8 sm:w-10 md:w-16 lg:w-24 top-[26px] left-[28px] sm:top-[35px] sm:left-[37px] md:top-[53px] md:left-[55px] lg:top-[70px] lg:left-[67px] meme'/>
      </motion.div>

    </section>
  )
}

export default AboutMe