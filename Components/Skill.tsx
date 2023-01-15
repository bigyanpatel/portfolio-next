import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { Skill } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    skill: Skill;
    directionLeft?: boolean;
}

function Skill({skill, directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            x: directionLeft ? -100 : 100,
            opacity: 0
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        alt={'Skill Image'}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-[40px] h-[40px] md:w-[70px] md:h-[70px] xl:w-[80px] xl:h-[80px] filter group:hover:grayscale transition duration-300 ease-in-out"
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duraition-300 ease-in-out group-hover:bg-white w-[40px] h-[40px] md:w-[70px] md:h-[70px] xl:w-[80px] xl:h-[80px] rounded-full'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-[12px] md:text-[20px] font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill