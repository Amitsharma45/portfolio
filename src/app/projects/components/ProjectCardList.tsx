import { Project } from '@/types/project';
import React from 'react'
import ProjectCard from './ProjectCard';
import Title from '@/components/ui/Title';


const ProjectCardList = () => {
  return (
    <div className='w-full px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8'>
          <Title title='Projects'/>
          <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-2 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0">
              { data.map((project: Project, idx: number) => (
                  <ProjectCard 
                    key={idx} 
                    logo={project.logo} 
                    title={project.title} 
                    description={project.description} 
                    techStack={project.techStack} 
                    link={project.link} 
                    source={project.source} 
                  />
              ))}
          </div>
    </div>
  )
}

export default ProjectCardList;

const data: Project[] = [
    {
      logo: '/enrich.png',
      title: "Enrich Salon Management",
      description: "Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and bookings.",
      techStack: ["React", "MUI", "Tailwind CSS", "Razorpay", "Nodemailer", "React Charts", "NodeJS", "MongoDB"],
      link: "https://enrich-hair-salon.vercel.app/",
      source: "https://github.com/Fardeen26/enrich-salon-management",
    },
    {
      logo: '/orbittoken.png',
      title: "OrbitToken",
      description: "OrbitToken enables users launch their custom tokens on the Solana blockchain, with features to transfer tokens, view token balances, transfer SOL, receive airdrops, and check account balances.",
      techStack: ["React", "Web3.js", "spl-token", "TailwindCSS"],
      link: "https://orbit-token-chi.vercel.app/",
      source: "https://github.com/Fardeen26/OrbitToken",
    },
    {
      logo: '/gobegin.webp',
      title: "GoBegin booking application",
      description: "GoBegin is a platform where users can list residences, view details, comment, and see locations on a map—similar to Airbnb.",
      techStack: ["NodeJS", "ExpressJS", "MongoDB", "Bootstrap", "PassportJS", "EJS"],
      link: "https://wanderlust-6cr5.onrender.com/",
      source: "https://github.com/Fardeen26/wanderlust_app",
    },
    
    {
      logo: "/lexicon.jpeg",
      title: "Lexicon",
      description: "Lexicon is a platform for discovering, downloading, and uploading books with a clean, user-friendly interface, working on auth and review functionality.",
      techStack: ["NextJS", "Typescript", "Tailwind CSS", "MongoDB", "Zod"],
      link: "https://lexicon-sand.vercel.app/",
      source: "https://github.com/Fardeen26/lexicon",
    },
   
    {
      logo: "/sumz.svg",
      title: "SumZ - Article Summarizer",
      description: "SumZ is an article summarizer that quickly generates concise summaries of lengthy articles, helping users grasp key points efficiently. It's designed for speed and accuracy with a clean, user-friendly interface.",
      techStack: ["React", "OpenAI", "Tailwind CSS"],
      link: "https://sumz-summarize.netlify.app/",
      source: "https://github.com/Fardeen26/Article-Summarizer",
    },

    {
      logo: "/ghostgram.png",
      title: "GhostGram - SaaS platform",
      description: "GhostGram is an anonymous messaging platform where users can send and receive messages securely via unique links. It ensures user anonymity with authentication and dynamic link generation.",
      techStack: ["NextJS", "Typescript", "MongoDB", "NextAuth", "TailwindCSS", "Shadcn"],
      link: "",
      source: "https://github.com/Fardeen26/ghostgram",
    },

    {
      logo: "/textify.png",
      title: "Textify - Canva App",
      description: "Textify is an image-to-text extractor that converts popular image formats like PNG, JPEG, and SVG into text. It supports large image files and provides accurate text extraction for easy content processing.",
      techStack: ["React", "Canva SDK", "Typescript", "API"],
      link: "",
      source: "https://github.com/Fardeen26/Textify",
    },
    
    {
      logo: "/foundry.webp",
      title: "Foundry Crowdsourcing",
      description: "Foundry-Crowdsourcing is a decentralized app build on Ethereum Blockchain that enables users to create and contribute to crowdfunding campaigns using secure smart contracts.",
      techStack: ["Solidity", "Foundry", "Makefile", "Alchemy", "zkSync"],
      link: "",
      source: "https://github.com/Fardeen26/Foundry-Crowdsourcing",
    },
  ];