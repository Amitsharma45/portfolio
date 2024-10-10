'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
import { MagicCard } from './ui/magic-card';
import { Link } from '@radix-ui/themes';
import { I_Experience } from '@/types/project';
import { DarkModeContext } from '@/context/DarkModeContext';
import { bricolage_grotesque, inter } from '@/utils/fonts';
import Title from './ui/Title';

const Experience = ({
    company_link,
    company_logo,
    company_name,
    duration,
    job_title,
    description
}: I_Experience) => {
    const darkModeContext = useContext(DarkModeContext);
    if (!darkModeContext) {
        throw new Error("darkModeContext is possibly undefined!");
    }

    const { isDarkMode } = darkModeContext;

    return (
        <div className='w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8'>
            <Title title='Experience' />

            <MagicCard className="cursor-pointer dark:shadow-2xl mt-5 !bg-transparent border-none" gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}>
                <div className="flex w-full px-5 max-sm:px-0 max-sm:pr-1 py-3">
                    <div className="w-24 flex items-center justify-center">
                        <Link href={company_link} target='_blank'>
                            <Image src={company_logo} alt='company-logo' width={50} height={50} className='rounded-full' />
                        </Link>
                    </div>
                    <div className="w-full">
                        <div className="">
                            <div className={`flex justify-between max-sm:items-center ${bricolage_grotesque}`}>
                                <h1 className='text-lg max-sm:text-base font-semibold'>{company_name}</h1>
                                <span className={`text-xs max-sm:text-[10px] max-sm:hidden`}>{duration}</span>
                            </div>
                            <h2 className={`text-sm max-sm:text-xs ${inter}`}>{job_title}</h2>
                            <h2 className={`text-sm max-sm:text-[10px] hidden max-sm:block mt-1 ${inter}`}>{duration}</h2>
                        </div>
                        <div className="mt-3 text-sm max-sm:text-[11px]">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </MagicCard>
        </div>
    );
};

export default Experience;
