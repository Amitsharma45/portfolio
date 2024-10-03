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


const Coursework = () => {
    const darkModeContext = useContext(DarkModeContext);

    if (!darkModeContext) {
        throw new Error("darkModeContext is possibly undefined!");
    }

    const { isDarkMode } = darkModeContext;
  return (
    <div className='w-1/2 max-sm:w-full max-sm:px-2 flex flex-col items-center mt-4 pb-8 bricolage-grotesque'>
        <Heading title='Coursework'/>
        <MagicCard className="cursor-pointer dark:shadow-2xl mt-5 !bg-transparent border-none" gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}>
            <div className="flex !justify-between w-[50vw] max-sm:w-full px-5 py-3">
                <div className="w-full flex">
                    <div className="w-24 h-12 flex justify-center">
                        <Image src='/100xdevs.jpeg' alt='100xdevs' width={50} height={50} className='rounded-full'/>
                    </div>
                    <div className="w-full">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <div className="w-full flex justify-between">
                                    <AccordionTrigger>
                                        <h2 className="text-lg max-sm:text-base font-semibold">Full Stack + DevOps + Web3</h2>
                                    </AccordionTrigger>
                                    <span className='text-xs max-sm:text-[10px] max-sm:hidden'>Aug 2024 - March 2025</span>
                                </div>
                                <p className="text-sm max-sm:text-xs">100xdevs</p>
                                <AccordionContent className='mt-2'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ea, totam rem eaque non voluptate ipsa? Perferendis nisi facere corrupti.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </MagicCard>
    </div>
  )
}

export default Coursework