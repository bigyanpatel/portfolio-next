import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import mypic from '../Assets/profile.png'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.div
        initial={{
            y: -100,
            opacity:0,
        }}
        transition={{duration: 1.2}}
        whileInView={{
            opacity:1, y: 0
        }}
        viewport={{
            once: true
        }}
        >
        <Image
          src={mypic}
          alt="Picture of the author"
          className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        />
        </motion.div>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Frontend Developer Intern: RDS</h4>
            <p className='font-bold text-2xl mt-1'>Real Dev Squad</p>
            <div className='flex space-x-2 my-2'>
                <Image
                src='https://www.freepnglogos.com/uploads/javascript/logo-html-5-css-javascript-source-code-for-the-taking-23.png'
                alt="Picture of the author"
                width={100}
                height={100}
                />
                {/* Tech used */}
                {/* Tech used */}
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard