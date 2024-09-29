import { Project } from '@/types/project';
import React from 'react'
import ProjectCard from './ProjectCard';

const ProjectCardList = () => {
  return (
    <div className='w-full px-64 max-sm:px-2 flex flex-col items-center mt-4 pb-8'>
          <div className='px-40 max-sm:px-2'>
              <h1 className='text-[2rem] font-bold tracking-tight text-start font-sans'>
                  Projects
              </h1>
          </div>
          <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-sm:px-2 flex-wrap items-center ml-7 max-sm:ml-0">
              { data.map((project: Project, idx: number) => (
            <ProjectCard key={idx} logo={project.logo} title={project.title} description={project.description} techStack={project.techStack} link={project.link} source={project.source} />
        ))}
          </div>
      </div>
  )
}

export default ProjectCardList;

const data: Project[] = [
    {
      logo: '/salon-favicon.png',
      title: "Enrich Salon Management",
      description: "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
      techStack: ["React", "MUI", "Tailwind CSS", "Razorpay", "Nodemailer", "React Charts", "NodeJS", "MongoDB"],
      link: "https://enrich-hair-salon.vercel.app/",
      source: "https://github.com/Fardeen26/enrich-salon-management",
    },
    {
      logo: '/orbittoken-favicon.png',
      title: "OrbitToken",
      description: "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
      techStack: ["React", "Web3.js", "spl-token", "TailwindCSS"],
      link: "https://orbit-token-chi.vercel.app/",
      source: "https://github.com/Fardeen26/OrbitToken",
    },
    {
      logo: '/developer.jpg',
      title: "Wanderlust booking application",
      description: "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
      techStack: ["NodeJS", "ExpressJS", "MongoDB", "Bootstrap", "PassportJS", "EJS"],
      link: "https://wanderlust-6cr5.onrender.com/",
      source: "https://github.com/Fardeen26/wanderlust_app",
    },
    {
      logo: "https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png",
      title: "GhostGram - SaaS platform",
      description: "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
      techStack: ["NextJS", "Typescript", "MongoDB", "NextAuth", "TailwindCSS", "Shadcn"],
      link: "",
      source: "https://github.com/Fardeen26/ghostgram",
    },
    {
      logo: "https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png",
      title: "Lexicon",
      description: "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
      techStack: ["NextJS", "Typescript", "Tailwind CSS", "MongoDB", "Zod"],
      link: "https://lexicon-sand.vercel.app/",
      source: "https://github.com/Fardeen26/lexicon",
    },
    {
      logo: "https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png",
      title: "Textify - Canva App",
      description: "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
      techStack: ["React", "Canva SDK", "Typescript", "API"],
      link: "",
      source: "https://github.com/Fardeen26/Textify",
    },
    {
      logo: "https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png",
      title: "SumZ - Article Summarizer",
      description: "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
      techStack: ["React", "OpenAI", "Tailwind CSS"],
      link: "https://sumz-summarize.netlify.app/",
      source: "https://github.com/Fardeen26/Article-Summarizer",
    },
    {
      logo: "https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png",
      title: "Foundry Crowdsourcing",
      description: "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
      techStack: ["Solidity", "Foundry", "Makefile", "Alchemy", "zkSync"],
      link: "",
      source: "https://github.com/Fardeen26/Foundry-Crowdsourcing",
    },
  ];