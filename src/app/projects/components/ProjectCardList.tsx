import { Project } from '@/types/project';
import React from 'react'
import ProjectCard from './ProjectCard';

const ProjectCardList = () => {
  return (
    <>
        { data.map((project: Project, idx) => (
            <ProjectCard key={idx} logo={project.logo} title={project.title} description={project.description} techStack={project.techStack} link={project.link} source={project.source} />
        ))}
    </>
  )
}

export default ProjectCardList

  const data: Project[] = [
    {
      logo: '/salon-favicon.png',
      title: "Enrich Salon Management",
      description: "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
      techStack: ["React", "MUI", "Tailwind CSS", "Razorpay", "Nodemailer", "React Charts", "NodeJS", "MongoDB"],
      link: "https://opinify.in/",
      source: "https://github.com/avayyyyyyy/opinify",
    },
    {
      logo: '/orbittoken-favicon.png',
      title: "Opinify - Feedback Collection SaaS",
      description: "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
      techStack: ["NextJS", "Prisma", "Typescript", "Firebase", "TailwindCSS"],
      link: "https://opinify.in/",
      source: "https://github.com/avayyyyyyy/opinify",
    },
    {
      logo: '/developer.jpg',
      title: "Opinify - Feedback Collection SaaS",
      description: "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
      techStack: ["NextJS", "Prisma", "Typescript", "Firebase", "TailwindCSS"],
      link: "https://opinify.in/",
      source: "https://github.com/avayyyyyyy/opinify",
    },
    {
      logo: "https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png",
      title: "Opinify - Feedback Collection SaaS",
      description: "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
      techStack: ["NextJS", "Prisma", "Typescript", "Firebase", "TailwindCSS"],
      link: "https://opinify.in/",
      source: "https://github.com/avayyyyyyy/opinify",
    },
    {
      logo: "https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png",
      title: "Opinify - Feedback Collection SaaS",
      description: "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
      techStack: ["NextJS", "Prisma", "Typescript", "Firebase", "TailwindCSS"],
      link: "https://opinify.in/",
      source: "https://github.com/avayyyyyyy/opinify",
    },
    {
      logo: "https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png",
      title: "Opinify - Feedback Collection SaaS",
      description: "Opinify is a feedback collection platform where users can embed a code in their website to collect user feedbacks.",
      techStack: ["NextJS", "Prisma", "Typescript", "Firebase", "TailwindCSS"],
      link: "https://opinify.in/",
      source: "https://github.com/avayyyyyyy/opinify",
    },
  ];