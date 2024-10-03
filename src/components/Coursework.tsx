import React, { useContext } from 'react'
import Heading from './ui/heading'
import { MagicCard } from './ui/magic-card'
import { DarkModeContext } from '@/context/DarkModeContext';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from '@radix-ui/themes';
import { I_Coursework } from '@/types/project';


const Coursework = () => {
    const darkModeContext = useContext(DarkModeContext);

    if (!darkModeContext) {
        throw new Error("darkModeContext is possibly undefined!");
    }

    const { isDarkMode } = darkModeContext;
  return (
    <div className='w-1/2 max-sm:w-full max-sm:px-2 flex flex-col items-center mt-4 pb-8 bricolage-grotesque'>
        <Heading title='Coursework'/>

        {data.map((course, idx) => (
            <MagicCard key={idx} className="cursor-pointer dark:shadow-2xl h-fit mt-2 !bg-transparent border-none" gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}>
            <div className="flex !justify-between w-[50vw] max-sm:w-full px-5 py-3">
                <div className="w-full flex">
                    <div className="w-24 h-12 flex justify-center">
                        <Link href={course.course_link} target='blank'>
                            <Image src={course.course_company_logo} alt='100xdevs' width={50} height={50} className='rounded-full'/>
                        </Link>
                    </div>
                    <div className="w-full">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <div className="w-full flex justify-between">
                                    <AccordionTrigger>
                                        <h2 className="text-base max-sm:text-base font-semibold">{course.course_title}</h2>
                                    </AccordionTrigger>
                                    <span className='text-xs max-sm:text-[10px] max-sm:hidden'>{course.duration}</span>
                                </div>
                                <p className="text-sm max-sm:text-xs">{course.course_company_name}</p>
                                <AccordionContent className='mt-2'>
                                    {course.description}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </MagicCard>
        ))}
    </div>
  )
}

export default Coursework


const data: I_Coursework[] = [
    {
      course_link: 'https://app.100xdevs.com/',
      course_company_logo: "/100xdevs.jpeg",
      course_title: "Full Stack + DevOps + Web3",
      duration: 'Aug 2024 - March 2025',
      course_company_name: "100xdevs",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ea, totam rem eaque non voluptate ipsa? Perferendis nisi facere corrupti",
    },
    {
      course_link: 'https://app.100xdevs.com/',
      course_company_logo: "/company1.jpeg",
      course_title: "MERN Stack Development",
      duration: 'Sep 2023 - Feb 2024',
      course_company_name: "Apna College",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ea, totam rem eaque non voluptate ipsa? Perferendis nisi facere corrupti",
    },
    {
      course_link: 'https://www.coderarmy.in/',
      course_company_logo: "https://cdn.discordapp.com/icons/1152852753400479787/c1e616df16d105fa53ba5f58e12afb67.webp?size=60",
      course_title: "Data Structures and Algorithm",
      duration: 'Aug 2023 - Feb 2024',
      course_company_name: "Coder Army",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ea, totam rem eaque non voluptate ipsa? Perferendis nisi facere corrupti",
    },  
  ];