import Head from 'next/head'
import About from '../Components/About'
import ContactMe from '../Components/ContactMe'
import Experience from '../Components/Experience'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Bigyan's Portfolio</title>
      </Head>
      <Header/>
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>
      <section id='about' className='snap-center'>
        <About/>
      </section>
      <section id='experience' className='snap-center'>
        <Experience/>
      </section>
      <section id='skills' className='snap-start'>
        <Skills/>
      </section>
      <section id='projects' className='snap-start'>
        <Projects/>
      </section>
      <section>
        <ContactMe/>
      </section>
    </div>
  )
}