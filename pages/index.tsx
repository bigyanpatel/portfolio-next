import { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../Components/About'
import ContactMe from '../Components/ContactMe'
import WorkExperience from '../Components/Experience'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperience } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocial } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, projects, skills, socials}: Props) => {
  const title = `${pageInfo?.name} Portfolio`;
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>{title}</title>
      </Head>
      <Header socials={socials}/>
      <section id='hero' className='snap-center'>
        <Hero pageInfo={pageInfo}/>
      </section>
      <section id='about' className='snap-center'>
        <About/>
      </section>
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>
      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>
      <section id='contactMe' className='snap-start'>
        <ContactMe/>
      </section>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    revalidate: 10,
  }
}