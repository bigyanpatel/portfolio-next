import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from '../Components/ExperienceCard'

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-col max-w-full px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl'>
              Experience
          </h3>
        <div className='absolute top-10 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-manditory'>
            <ExperienceCard/>
            <ExperienceCard/>
        </div>
    </motion.div>
  )
}

export default Experience