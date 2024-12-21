'use client'

import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import Title from '@/components/ui/Title';
import SimpleProjectCard from '@/components/SimpleProjectCard';


const ProjectCardList = () => {
  return (
    <div className='w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8'>
      <Title title='Projects' />
      <SimpleProjectCard />

      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
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
    logo: '/saloon-5.png',
    title: "Enrich Salon Management",
    description: "Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and bookings.",
    techStack: ["React", "MUI", "Tailwind CSS", "Razorpay", "Nodemailer", "React Charts", "Node.js", "Express.js", "MongoDB"],
    link: "https://enrich-salon.fardeen.tech",
    source: "https://github.com/Fardeen26/enrich-salon-management",
  },
  {
    logo: '/token-2.png',
    title: "OrbitToken",
    description: "An decentralized platform enables users launch their custom tokens, transfer tokens, view token balances, transfer SOL, and check account balances.",
    techStack: ["React", "Web3.js", "TypeScript", "Recoil", "spl-token", "Tailwind CSS"],
    link: "https://orbittoken.fardeen.tech",
    source: "https://github.com/Fardeen26/OrbitToken",
  },
  {
    logo: "/anon-4.png",
    title: "GhostGram - SaaS platform",
    description: "GhostGram is an anonymous messaging platform that lets users securely send and receive messages through unique, authenticated links.",
    techStack: ["Next.js", "Typescript", "Gemini", "MongoDB", "NextAuth", "Nodemailer", "Tailwind CSS", "Shadcn"],
    link: "https://ghostgram.fardeen.tech",
    source: "https://github.com/Fardeen26/ghostgram",
  },
  {
    logo: "/book-1.png",
    title: "Lexicon",
    description: "Lexicon is a platform for discovering, downloading, and uploading books with a clean, user-friendly interface, working on auth and review functionality.",
    techStack: ["Next.js", "Typescript", "NextAuth", "framer-motion", "MongoDB", "Tailwind CSS", "Shadcn", "Zod"],
    link: "https://lexicon.fardeen.tech",
    source: "https://github.com/Fardeen26/lexicon",
  },
  {
    logo: "/chat-icon.png",
    title: "The Chat Haven",
    description: "The Chat Haven is a chat application that allows users to create & join room and send & receive messages in real-time.",
    techStack: ["Next.js", "Node.js", "WebSockets", "TypeScript", "Tailwind CSS"],
    link: "https://chathaven.fardeen.tech",
    source: "https://github.com/Fardeen26/chat-app",
  },
  {
    logo: '/gobegin-5.png',
    title: "GoBegin - Travel Application",
    description: "GoBegin is a platform where users can list residences, view details of available listings, add reviews, and see locations on a map—similar to Airbnb",
    techStack: ["Node.js", "Express.js", "MongoDB", "passport.js", "cloudinary", "Bootstrap"],
    link: "https://wanderlust-6cr5.onrender.com/",
    source: "https://github.com/Fardeen26/wanderlust_app",
  },
  {
    logo: '/codify.png',
    title: "Codify",
    description: "Codify transforms your source code into stunning, shareable images with customizable themes, fonts, and backgrounds—perfect for developers and tutorials.",
    techStack: ["Next.js", "TypeScript", "Shadcn", "Tailwind CSS"],
    link: "https://codify.fardeen.tech",
    source: "https://github.com/Fardeen26",
  },
  {
    logo: '/f-1.png',
    title: "Portfolio",
    description: "A portfolio crafted and developed by me, showcasing my skills, projects, and passion for web development",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "TipTap Editor", "Resend", "Cloudinary", "Zod", "framer-motion", "Tailwind CSS"],
    link: "https://fardeen.tech",
    source: "https://github.com/Fardeen26/portfolio",
  }
];