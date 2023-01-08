import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import mypic from '../Assets/profile.png'
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

export default function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hii, The Name's ${pageInfo?.name}`,
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore/>",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={urlFor(pageInfo?.profilePic).url()}
        alt="Picture of the author"
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                {pageInfo?.role}
            </h2>
            <h3 className='text-2xl lg:text-4xl font-semibold tracking-[7px]'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor="#0284c7"/>
            </h3>

            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton bg-[#e0f2fe]'>About</button>
                </Link>
                {/* <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link> */}
                <Link href="#skills">
                    <button className='heroButton bg-[#e0f2fe]'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton bg-[#e0f2fe]'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}