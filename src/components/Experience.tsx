'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
import { MagicCard } from './ui/magic-card';
import { Link } from '@radix-ui/themes';
import Heading from './ui/heading';
import { I_Experience } from '@/types/project';
import { DarkModeContext } from '@/context/DarkModeContext';
import { bricolage_grotesque, inter } from '@/utils/fonts';

const Experience = ({
    company_link = 'https://www.apnacollege.in/',
    company_logo = '/company1.jpeg',
    company_name = 'Apna College',
    duration = 'Feb 2024 - June 2024',
    job_title = 'Teaching Assistant (MERN STACK)',
    description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto maxime harum facere voluptas officiis doloribus nobis accusamus, laboriosam ratione in!',
}: I_Experience) => {
    const darkModeContext = useContext(DarkModeContext);
    if (!darkModeContext) {
        throw new Error("darkModeContext is possibly undefined!");
    }

    const { isDarkMode } = darkModeContext;

    return (
        <div className='w-1/2 max-sm:w-full max-sm:px-2 flex flex-col items-center mt-4 pb-8'>
            <Heading title='Experience'/>

            <MagicCard className="cursor-pointer dark:shadow-2xl mt-5 !bg-transparent border-none" gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}>
                <div className="flex w-full px-5 py-3">
                    <div className="w-24 flex items-center justify-center">
                        <Link href={company_link}>
                            <Image src={company_logo} alt='company-logo' width={50} height={50} className='rounded-full' />
                        </Link>
                    </div>
                    <div className="w-full">
                        <div className="">
                            <div className={`flex justify-between max-sm:items-center ${bricolage_grotesque}`}>
                                <h1 className='text-lg font-semibold'>{company_name}</h1>
                                <span className={`text-xs max-sm:text-[10px]`}>{duration}</span>
                            </div>
                            <h2 className={`text-sm ${inter}`}>{job_title}</h2>
                        </div>
                        <div className="mt-3 text-sm max-sm:text-xs">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </MagicCard>
        </div>
    );
};

export default Experience;
