import Head from 'next/head'
import Header from '../Components/Header'
import Hero from '../Components/Hero'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Bigyan's Portfolio</title>
      </Head>
      <Header/>
      <section id='hero' className='snap-center'>
        <Hero/>
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  )
}