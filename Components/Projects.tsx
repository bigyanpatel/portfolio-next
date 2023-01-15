import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '../typings';
import { urlFor } from '../sanity';
import { log } from 'console';

type Props = {
  projects: Project[];
}

function Projects({projects}: Props) {

  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl z-30'>
        Projects
      </h3>
      
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0284c7]/40'>
        {projects.map((project, i) => (
          <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen'>
            
              <motion.img
              initial={{
                y: -300,
                opacity: 0
              }}
              transition={{duration: 1.2}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              src={urlFor(project?.image).url()} 
              alt="Project Image Icon"
              className='h-[200px] w-[300px] rounded-xl shadow-2xl hover:cursor-pointer'
              />
            <div className='flex gap-3'>
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => window.open(`${project.linkToBuild}`, "_blank")}                
              >
                Demo
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Source Code
              </button>
            </div>

            <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
              <h4 className='text-lg font-semibold text-center md:text-4xl'>
                <span className='uderline decoration-[#0ea5e9]/50'>
                  {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies.map((technology) => (
                  <img
                    className='h-10 w-10'
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt="Technology Img"
                  />
                ))}
              </div>

              <p className='text-sm sm:text-lg text-center md:text-left'>
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#0284c7]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects