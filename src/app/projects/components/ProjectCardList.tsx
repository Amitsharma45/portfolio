'use client'

import { Project } from '@/types/project';
import React, { useContext } from 'react'
import ProjectCard from './ProjectCard';
import Title from '@/components/ui/Title';
import { MagicCard } from '@/components/ui/magic-card';
import ShineBorder from '@/components/ui/shine-border';
import { Link } from '@radix-ui/themes';
import Image from 'next/image';
import { bricolage_grotesque, inter } from '@/utils/fonts';
import { DarkModeContext } from '@/context/DarkModeContext';


const ProjectCardList = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error("Navbar must be used within a DarkModeProvider");
  }

  const { isDarkMode } = darkModeContext;
  return (
    <div className='w-full px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8'>
      <Title title='Projects' />

      <MagicCard gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`} className='w-[68%] max-lg:w-[45%] max-sm:w-[95%] flex justify-center max-lg:justify-start !bg-transparent cursor-pointer mt-5 rounded-lg dark:shadow-2xl'>
        <ShineBorder color={["#FF9933", "#FFFFFF", "#138808"]} className='w-full !bg-transparent !pointer-events-none flex max-lg:flex-col max-lg:items-start p-5 md:shadow-xl'>
          <div className="w-[10vw] max-[1285px]:w-[13vw]">
            <Link href='#' target='_blank'>
              <Image src='/adobe.png' alt='company-logo' width={50} height={50} className='rounded-full max-lg:h-10 max-lg:w-10' />
            </Link>
          </div>
          <div className="max-lg:mt-3">
            <h1 className={`text-xl max-lg:text-lg text-black dark:text-white font-bold tracking-tight text-start ${bricolage_grotesque}`}>Textify: Adobe-Funded Add-On for Adobe Express</h1>
            <p className={`mt-2 text-sm dark:text-[#D1D5DB] ${inter}`}>Textify is an Adobe-funded add-on that enables seamless text extraction from images in Adobe Express, supporting formats like PNG, JPEG, and SVG to enhance creative workflows.</p>
          </div>
        </ShineBorder>
      </MagicCard>


      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-2 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.map((project: Project, idx: number) => (
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
    description: "GhostGram is an anonymous messaging platform that lets users securely send and receive messages through unique, authenticated links.",
    techStack: ["NextJS", "Typescript", "MongoDB", "NextAuth", "TailwindCSS", "Shadcn"],
    link: "",
    source: "https://github.com/Fardeen26/ghostgram",
  },
];