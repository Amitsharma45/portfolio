'use client';
import Heading from '@/components/ui/heading'
import { I_About } from '@/types/project'
import { bricolage_grotesque } from '@/utils/fonts'
import { Separator } from '@radix-ui/themes'
import React, { useState } from 'react'


const About = () => {
    const [isMore, setIsMore] = useState<boolean>(false);
  return (
    <div className='w-full px-64 max-sm:px-2 flex flex-col items-center mt-4 pb-8'>
        <Heading title='About My Journey'/>

        <div className="w-full pl-36 pr-28 max-sm:px-2">

            {data.slice(0, 3).map((item, idx) => (
                <>
                <h1 className={`text-2xl mt-8 font-medium ${bricolage_grotesque}`}>{item.year}</h1>
                <div key={idx} className="flex pl-2 mt-4">               
                <div className={`w-full flex flex-col gap-3 ${bricolage_grotesque}`}>

                    {item.events.map((incd, idx) => (
                        <div key={idx} className={`flex items-center gap-2 ${bricolage_grotesque}`}>
                            <span><Separator orientation='horizontal' size='1' className='w-8 bg-black dark:bg-gray-400'/></span>
                            <span className='text-[15px] dark:text-[#dfdede]'>{incd}</span>
                        </div>
                    ))}

                </div>
            </div>
            </>
            ))}

            <div className={`${isMore ? 'hidden' : 'block'}`} onClick={() => setIsMore(true)}>Read More</div>

            {
                isMore && data.slice(3).map((item, idx) => (
                    <>
                <h1 className={`text-2xl mt-8 font-medium ${bricolage_grotesque}`}>{item.year}</h1>
                <div key={idx} className="flex pl-2 mt-4">               
                <div className={`w-full flex flex-col gap-3 ${bricolage_grotesque}`}>

                    {item.events.map((incd, idx) => (
                        <div key={idx} className={`flex items-center gap-2 ${bricolage_grotesque}`}>
                            <span><Separator orientation='horizontal' size='1' className='w-8 bg-black dark:bg-gray-400'/></span>
                            <span className='text-[15px] dark:text-[#dfdede]'>{incd}</span>
                        </div>
                    ))}

                </div>
            </div>
            </>
                ))
            }
            
            <button className={`${isMore ? 'block' : 'hidden'}`} onClick={() => setIsMore(false)}>See less</button>
        </div>
    </div>
  )
}

export default About


const data : I_About[] = [
    {
        year: 2024,
        events: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem."
        ]
    },
    {
        year: 2023,
        events: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem2.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem2.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem2.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem2."
        ]
    },
    {
        year: 2022,
        events: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem3.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem3.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem3.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem2.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem2.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem2."
        ]
    },
    {
        year: 2021,
        events: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem."
        ]
    },
    {
        year: 2020,
        events: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem."
        ]
    },
    {
        year: 2019,
        events: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem."
        ]
    },
    {
        year: 2017,
        events: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem."
        ]
    },
    {
        year: 2015,
        events: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem."
        ]
    },
    {
        year: 2005,
        events: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, exercitationem."
        ]
    },
]