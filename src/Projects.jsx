import MyToDoListPic from './assets/MyToDoListPic.png';
import BabyMaterPic from './assets/BabyMaterPic.png';
import AmazonClonePic from './assets/AmazonClonePic.png';
import RockPaperScissorsPic from './assets/RockPaperScissorsPic.png';
import { motion } from "framer-motion";

//Lista com os meus projetos
const projects = [
  { title: "My To Do List",
    description: "Task management web application with interactive features such as task addition, editing, removal, sorting, and data persistence.",
    usedTech: ["HTML", "CSS", "JavaScript", "TypeScript"],
    pic: MyToDoListPic,
    linkRepo: "https://github.com/HugoProjects/MyToDoList",
    linkDemo: "https://hugoprojects.github.io/MyToDoList/"
  },
  { title: "BabyMater",
    description: "Website for a startup business in the healthcare sector (showcase video).",
    usedTech: ["Duda Technology"],
    pic: BabyMaterPic,
    linkRepo: "https://github.com/HugoProjects/BabyMaterFeaturesShowcase",
    linkDemo: "https://hugoprojects.github.io/BabyMaterFeaturesShowcase/"
  },
  { title: "Amazon Clone Page",
    description: "Amazon page clone, replicating an actual amazon search and buy, adding products to a cart and concluding the checkout with tracking.",
    usedTech: ["HTML","CSS", "JavaScript"],
    pic: AmazonClonePic,
    linkRepo: "https://github.com/HugoProjects/My-Amazon-Project",
    linkDemo: "https://hugoprojects.github.io/My-Amazon-Project/"
  },
  { title: "Rock Paper Scissors",
    description: "Classic Rock Paper Scissors game.",
    usedTech: ["HTML","CSS", "JavaScript"],
    pic: RockPaperScissorsPic,
    linkRepo: "https://github.com/HugoProjects/RockPaperScissors",
    linkDemo: "https://hugoprojects.github.io/RockPaperScissors/"
  }
];

const Projects = () => {
  return (
      <section id="projects" className="flex flex-col justify-center items-center">
        <motion.h1 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.1}}
          viewport={{ once: true }}
          className="text-4xl font-semibold"
        >Projects
        </motion.h1>

        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.1}}
          viewport={{ once: true }}
          className="h-[1px] bg-gradient-to-r from-transparent via-lineColor to-transparent my-5 w-[50%]"
        >
        </motion.div>

        <motion.p 
          initial={{opacity: 0, y: 25}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          viewport={{ once: true }}
          className='mt-4 mb-12 text-center'
        >
          These are some of the projects I've built over time, as I've learned and applied various technologies mentioned above. Each one reflects a step in my development journey and my ongoing commitment to learning and improving as a developer.
        </motion.p>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[75%] sm:w-full"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[80%] sm:w-[90%] md:w-[85%] lg:w-full">

          {projects.map((project, index) => (

            <motion.article 
              initial={{opacity: 0, y: 25}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.1}}
              viewport={{ once: true }}
              key={index} tabIndex={0} className="relative rounded-lg overflow-hidden cursor-pointer group"
            >

              {/* Imagem de fundo */}
              <div className="absolute -z-1 inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110"
                style={{ backgroundImage: `url(${project.pic})` }}>
              </div>

              {/* Gradient escuro (desaparece no hover) */}
              <div className="absolute inset-0 bg-[#141419] bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-90 group-focus-within:bg-opacity-90"></div>

              {/* Conteúdo do card */}
              <div className="relative flex flex-col items-center justify-center min-h-72 py-4 px-4 gap-4 group">

                {/* Titulo do card */}
                <h3 className="text-2xl text-blue-200 text-center font-semibold opacity-0 transition-opacity duration-300 drop-shadow group-hover:opacity-100 group-focus-within:opacity-100">
                  {project.title}
                </h3>

                <p className='opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 text-center text-white font-normal'>{project.description}</p>

                <div className="flex flex-wrap justify-center gap-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 mt-2 mb-3">
                  {project.usedTech.map((tech) => (
                    <span key={tech} className=' text-[rgba(20,20,25)] font-semibold rounded py-1 px-2 underline-brush'>{tech}</span>
                  ))}
                </div>

                {/* Botões (aparecem no hover) */}
                <div className="flex flex-wrap justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  <a
                    href={project.linkDemo}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="bg-backgroundColor text-textColor font-semibold text-center w-32 px-6 py-2 border-2 rounded-md drop-shadow hover:bg-textColor hover:text-backgroundColor focus-visible:bg-textColor focus-visible:text-backgroundColor transition"
                  >
                    View Live
                  </a>
                  <a
                    href={project.linkRepo}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="bg-backgroundColor text-textColor font-semibold text-center w-32 px-6 py-2 border-2 rounded-md drop-shadow hover:bg-textColor hover:text-backgroundColor focus-visible:bg-textColor focus-visible:text-backgroundColor transition"
                  >
                    Repository
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
  )
}

export default Projects