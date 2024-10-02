'use client';
import React, { useContext } from 'react';
import { MagicCard } from './ui/magic-card';
import Image from 'next/image';
import { Link } from '@radix-ui/themes';
import Heading from './ui/heading';
import { I_Education } from '@/types/project';
import { DarkModeContext } from '@/context/DarkModeContext';

const Education = ({
    institute_link = 'https://www.uok.ac.in/',
    institute_logo = '/uok.gif',
    course_title = 'Bachelors of Computer Application',
    ending_date = 'Expected July 2025',
    institute_name = 'University of Kota',
    cgpa = 8.5,
    description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto maxime harum facere voluptas officiis doloribus nobis accusamus, laboriosam ratione in!',
}: I_Education) => {
    const darkModeContext = useContext(DarkModeContext);

    if (!darkModeContext) {
        throw new Error("darkModeContext is possibly undefined!");
    }

    const { isDarkMode } = darkModeContext;

    return (
        <div className='w-1/2 max-sm:w-full max-sm:px-2 flex flex-col items-center mt-4 pb-8 bricolage-grotesque'>
            <Heading title='Education' />

            <MagicCard className="cursor-pointer dark:shadow-2xl mt-5 !bg-transparent border-none" gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}>
                <div className="flex w-full px-5 py-3">
                    <div className="w-24 flex items-center justify-center">
                        <Link href={institute_link}>
                            <Image src={institute_logo} alt='institute-logo' width={50} height={50} className='rounded-full' />
                        </Link>
                    </div>
                    <div className="w-full">
                        <div className="">
                            <div className="flex justify-between">
                                <h1 className='text-lg max-sm:text-base font-semibold'>{course_title}</h1>
                                <span className='text-xs max-sm:text-[10px]'>{ending_date}</span>
                            </div>
                            <h2 className='text-sm max-sm:text-xs'>{institute_name} &nbsp; &nbsp; cgpa: {cgpa}</h2>
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

export default Education;
