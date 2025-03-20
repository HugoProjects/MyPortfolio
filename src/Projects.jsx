import MyToDoListPic from './assets/MyToDoListPic.png';
import BabyMaterPic from './assets/BabyMaterPic.png';
import AmazonClonePic from './assets/AmazonClonePic.png';
import RockPaperScissorsPic from './assets/RockPaperScissorsPic.png';
import ProjectModal from './ProjectModal';

//Lista com os meus projetos
const projects = [
  { title: "My To Do List",
    description: "Descrição do projeto 1",
    pic: MyToDoListPic,
    linkDetails: "#",
    linkDemo: "https://hugoprojects.github.io/MyToDoList/"
  },
  { title: "BabyMater",
    description: "Descrição do projeto 2",
    pic: BabyMaterPic,
    linkDetails: "#",
    linkDemo: "https://hugoprojects.github.io/BabyMaterFeaturesShowcase/"
  },
  { title: "Amazon Clone Page",
    description: "Descrição do projeto 3",
    pic: AmazonClonePic,
    linkDetails: "#",
    linkDemo: "https://hugoprojects.github.io/My-Amazon-Project/"
  },
  { title: "Rock Paper Scissors",
    description: "Descrição do projeto 4",
    pic: RockPaperScissorsPic,
    linkDetails: "#",
    linkDemo: "https://hugoprojects.github.io/RockPaperScissors/"
  }
];

const Projects = () => {
  return (
    <>
      <section id="projects" className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-5 w-[50%]"></div>

        <p className='mt-4 mb-12 text-center'>
          These are some of the projects I've built over time, as I've learned and applied various technologies mentioned above. Each one reflects a step in my development journey and my ongoing commitment to learning and improving as a developer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[75%] sm:w-full">

          {projects.map((project, index) => (

            <article key={index} tabIndex={0} className="relative rounded-lg overflow-hidden cursor-pointer group">

              {/* Imagem de fundo */}
              <div className="absolute -z-1 inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 group-focus-within:scale-110"
                style={{ backgroundImage: `url(${project.pic})` }}
              ></div>

              {/* Gradient escuro (desaparece no hover) */}
              <div className="absolute inset-0 bg-[#141419] bg-opacity-50 transition-opacity duration-500 group-hover:bg-opacity-0 group-focus-within:bg-opacity-0"></div>

              {/* Conteúdo do card */}
              <div className="relative flex flex-col items-center justify-center h-full py-12 px-2 gap-8">

                {/* Titulo do card */}
                <h3 className="text-white text-xl text-center font-semibold transition-opacity duration-500 group-hover:drop-shadow group-focus-within:drop-shadow">
                  {project.title}
                </h3>

                {/* Botões (aparecem no hover) */}
                <div className="flex gap-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100">
                  <a
                    href={project.linkDetails}
                    tabIndex={0}
                    className="bg-blue-200 text-[#141419] font-semibold px-4 py-2 rounded-md drop-shadow hover:bg-blue-300 focus:bg-blue-300 transition"
                  >
                    Details
                  </a>
                  <a
                    href={project.linkDemo}
                    tabIndex={0}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="bg-[#141419] text-white font-semibold px-4 py-2 rounded-md drop-shadow hover:bg-gray-800 focus:bg-gray-800 transition"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>

    </>
  )
}

export default Projects