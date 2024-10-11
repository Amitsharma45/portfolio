'use client'
import { MagicCard } from '@/components/ui/magic-card'
import ShineBorder from '@/components/ui/shine-border'
import { DarkModeContext } from '@/context/DarkModeContext'
import { Project } from '@/types/project'
import { bricolage_grotesque, inter } from '@/utils/fonts'
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons'
import { Badge, Link } from '@radix-ui/themes'
import Image from 'next/image'
import React, { useContext } from 'react'

const ProjectCard = ({logo,title, description, techStack, link, source } : Project) => {

    const darkModeContext = useContext(DarkModeContext);

    if (!darkModeContext) {
        throw new Error("Navbar must be used within a DarkModeProvider");
    }

    const { isDarkMode } = darkModeContext;

  return (
        <MagicCard className="cursor-pointer rounded-lg dark:shadow-2xl w-[45%] max-sm:!w-fit h-[310px] border-none !bg-transparent" gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}>
            <ShineBorder className={`border h-full w-full relative rounded-lg flex flex-col justify-center items-start md:shadow-xl !bg-transparent !pointer-events-none`} color={["#FF9933", "#FFFFFF", "#138808"]}>
                
                <div className='px-3'>
                    <Image src={logo} alt='project-logo' width={30} height={30} />
                </div>
                <div className="px-3 mt-4 !pointer-events-auto">
                    <Link href={link ? link : source} target='_blank' underline='none'>
                        <h1 className={`text-xl text-black dark:text-white font-bold tracking-tight text-start whitespace-nowrap ${bricolage_grotesque}`}>{title}</h1>
                    </Link>
                    <p className={`mt-2 text-sm dark:text-[#D1D5DB] ${inter}`}>{description}</p>
                </div>
                <div className="flex gap-1 px-3 mt-4 flex-wrap !pointer-events-auto">
                    {
                        techStack.map((tech, idx) => (
                            <Badge key={idx} color="gray" variant="outline" highContrast className={`text-[10px] dark:hover:!bg-white hover:!bg-black hover:!text-white dark:hover:!text-black !pointer-events-auto ${bricolage_grotesque}`}>
                                {tech}    
                            </Badge>
                        ))
                    }
                </div>
                <div className='px-3 mt-3 !pointer-events-auto flex gap-1'>
                    {
                        link && (
                        <Link href={link} target='_blank'>
                            <Badge color="gray" variant="solid" highContrast className={`text-[10px] py-[3px] dark:hover:bg-gray-300 ${bricolage_grotesque}`}>
                                <GlobeIcon width={11} height={11}/> Website
                            </Badge>
                        </Link>
                        )
                    }
                
                    <Link href={source} target='_blank'>
                        <Badge color="gray" variant="solid" highContrast className={`text-[10px] py-[3px] dark:hover:bg-gray-300 ${bricolage_grotesque}`}>
                            <GitHubLogoIcon width={11} height={11}/> Source
                        </Badge>
                    </Link>
                </div>
            </ShineBorder>
        </MagicCard>
  )
}

export default ProjectCard