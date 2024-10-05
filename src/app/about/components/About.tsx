'use client';
import Heading from '@/components/ui/heading'
import { I_About } from '@/types/project'
import { bricolage_grotesque } from '@/utils/fonts'
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Badge, Separator } from '@radix-ui/themes'
import React, { useState } from 'react'


const About = () => {
    const [isMore, setIsMore] = useState<boolean>(false);
  return (
    <div className='w-full px-64 max-sm:px-2 flex flex-col items-center mt-4 pb-8'>
        <Heading title='About My Journey'/>

        <div className="w-full pl-36 pr-28 max-sm:px-2">

            {data.slice(0, 3).map((item, idx) => (
                <div key={idx}>
                    <h1 className={`text-2xl mt-8 font-medium ${bricolage_grotesque}`}>{item.year}</h1>
                    <div  className="flex pl-2 mt-4">               
                        <div className={`w-full flex flex-col gap-3 ${bricolage_grotesque}`}>

                            {item.events.map((incd, idx) => (
                                <div key={idx} className={`flex items-center gap-2 ${bricolage_grotesque}`}>
                                    <span><Separator orientation='horizontal' size='1' className='w-8 bg-black dark:bg-gray-400'/></span>
                                    <span className='text-[15px] dark:text-[#dfdede]'>{incd}</span>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            ))}

            {/* <div className={`${isMore ? 'hidden' : 'block'}`} onClick={() => setIsMore(true)}>Read More</div> */}
            <div className={`flex justify-center mt-5 ${isMore ? 'hidden' : 'block'}`}>
                <Badge color="gray" variant="solid" highContrast onClick={() => setIsMore(true)} className={`text-xs max-sm:text-[10px] w-20 flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}>
                    <span>See More</span>
                    <span className='!ml-[-3px] mt-[1px]'>
                        <ChevronDownIcon className='h-3 w-3 !text-black shrink-0 text-muted-foreground transition-transform duration-200'/>
                    </span>
                </Badge>
            </div>

            {
                isMore && data.slice(3).map((item, idx) => (
                <div key={idx}>
                    <h1 className={`text-2xl mt-8 font-medium ${bricolage_grotesque}`}>{item.year}</h1>
                    <div className="flex pl-2 mt-4">               
                        <div className={`w-full flex flex-col gap-3 ${bricolage_grotesque}`}>

                            {item.events.map((incd, idx) => (
                                <div key={idx} className={`flex items-center gap-2 ${bricolage_grotesque}`}>
                                    <span><Separator orientation='horizontal' size='1' className='w-8 bg-black dark:bg-gray-400'/></span>
                                    <span className='text-[15px] dark:text-[#dfdede]'>{incd}</span>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                ))
            }
            
            {/* <button className={`${isMore ? 'block' : 'hidden'}`} onClick={() => setIsMore(false)}></button> */}

            <div className={`flex justify-center mt-5 ${isMore ? 'block' : 'hidden'}`}>
                <Badge color="gray" variant="solid" highContrast onClick={() => setIsMore(false)} className={`text-xs max-sm:text-[10px] w-20 flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}>
                    <span>See Less</span>
                    <span className='!ml-[-3px] mt-[1px]'>
                        <ChevronDownIcon className='rotate-180 h-3 w-3 !text-black shrink-0 text-muted-foreground transition-transform duration-200'/>
                    </span>
                </Badge>
            </div>
        </div>
    </div>
  )
}

export default About


const data : I_About[] = [
    {
        year: 2024,
        events: [
            "Deep dive into Web Development, learned many new technologies and made 5-6 good projects and still counting. 🔥",
            "Started with Web3 development and doing good in it ⛓",
            "At this stage I can proudly say I come an6 long way",            
        ]
    },
    {
        year: 2023,
        events: [
            "Stop playing cricket because of family pressure",
            "Started BCA first year without knowing what programming is 🚀",
            "Bought my first laptop and learned c and Web development 💻",
        ]
    },
    {
        year: 2022,
        events: [
            "Completed my 12th grade by 90% 📜",
            "still playing professional cricket and doing great in it.",
        ]
    },
    {
        year: 2021,
        events: [
            "Lockdown affected my cricket and studies so bad and life just stopped 😷",
        ]
    },
    {
        year: 2020,
        events: [
            "Completed my 10th grade by 70%",
            "At that time I started to playing professional cricket 🏏",
        ]
    },
    {
        year: 2019,
        events: [
            "Doing the things that every engineer do in his teenage bracking and macking things.",
            "Build an motorcycle like brack lightning system in my cycle 🏍️",
        ]
    },
    {
        year: 2017,
        events: [
            "Introduce to Computer for the first time on a cyber cafe 💻",
            "Only know that computer is only for playing games.",
        ]
    },
    {
        year: 2015,
        events: [
            "Start to watching cricket for the first time.",
            "Become an Fan of an young Virat Kohli 🔥",
        ]
    },
    {
        year: 2005,
        events: [
            "First Software Engineer born in the family 👶🏼 🍼",
        ]
    },
]