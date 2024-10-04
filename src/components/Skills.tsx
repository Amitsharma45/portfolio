import { Badge, Tooltip } from '@radix-ui/themes'
import React from 'react'
import Heading from './ui/heading'
import { bricolage_grotesque } from '@/utils/fonts'

const Skills = () => {
  return (
    <div className='w-2/3 max-sm:w-full flex flex-col items-center mt-4 pb-8'>
        <Heading title='Skills'/>          
          <div className="flex w-full flex-col max-sm:flex-row gap-3 max-sm:gap-2 lg:flex-row mt-4 px-40 max-sm:px-4 flex-wrap justify-center items-center max-sm:ml-0">
            {
                data.map((skill, idx) => (   
                <Tooltip key={idx} content={skill}>
                    <Badge color="gray" variant="solid" highContrast className={`text-xs max-sm:text-[10px] dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}>
                        {skill}
                    </Badge>
                </Tooltip>
                ))
            }
          </div>
    </div>
  )
}


export default Skills

const data: string[] = ["NextJS","TypeScript","React","Tailwind CSS","NodeJS","Express","MongoDB","MySQL","REST APIs","GitHub","Vercel","VS Code","Bootstrap","Solidity","C","C++","Java","Redux","foundry","Web3.js","Ethers.js","Zod","MUI","Shadcn","Remix", ];