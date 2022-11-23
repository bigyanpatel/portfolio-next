import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import myPic from '../Assets/ProfileImage.png'


type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex flex-col relative h-screen justify-evenly items-center '>
      <h3 className=' uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <div className='flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <div className='w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[1000px] md:h-95 xl:w-[2000px] xl:h-[600px]'>
          <motion.div 
            initial={{
              x: -200,
              opacity: 0
            }}
            transition={{
              duration: 1.2
            }}
            whileInView={{
              x : 0,
              opacity: 1
            }}
          >
            <Image
              src={myPic}
              alt="Picture of the author"
              className='w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:h-[600px] xl:w-[500px]'
            />
          </motion.div>
        </div>
        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>
            Here is a{" "}
            <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
            background
          </h4>
          <p className='text-base scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, provident obcaecati blanditiis sequi eum ratione nesciunt fugit natus fugiat facilis vero, totam quasi architecto ducimus? Sit laudantium nam saepe cumque consectetur! Ad maxime temporibus nemo et, aliquid pariatur necessitatibus porro consectetur molestias, quidem molestiae expedita id nobis ex. Vitae aperiam facilis animi itaque nobis modi doloribus dolores aspernatur aliquid quos ratione quidem fugiat id quo aut reiciendis dicta architecto asperiores minus blanditiis, culpa soluta dignissimos porro. Dolorum accusantium facilis possimus tempore temporibus voluptatum cumque commodi voluptas consequuntur neque praesentium nulla, quia delectus eos at voluptate, doloremque, facere labore? Sit, ea.
          </p>
        </div>

      </div>
    </motion.div>
  )
}

export default About