import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

type Props = {
    directionLeft?: boolean;
}

function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.div
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        >
            <Image
            src={'https://img.icons8.com/bubbles/512/react.png'}
            alt={'Skill Image'}
            width={100}
            height={100}
            />
        </motion.div>
        <div className='absolute opacity-0 group-hover:opacity-80 transition duraition-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill