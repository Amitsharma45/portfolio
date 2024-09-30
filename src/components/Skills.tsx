import { Badge } from '@radix-ui/themes'
import React from 'react'

const Skills = () => {
  return (
    <div className='w-2/3 max-sm:px-2 flex flex-col items-center mt-4 pb-8'>
        <div className='px-40 max-sm:px-2 text-center'>
              <h1 className='text-[2rem] font-semibold tracking-tight text-start font-sans bricolage-grotesque'>
                  Skills
              </h1>
        </div>
          
          <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-40 max-sm:px-2 flex-wrap justify-center items-center max-sm:ml-0">
            {
                data.map((skill, idx) => (
                    <Badge key={idx} color="gray" variant="solid" highContrast className='text-[12px] hover:bg-gray-300 py-1 px-2'>
                        {skill}
                    </Badge>
                ))
            }
          </div>
    </div>
  )
}


export default Skills

const data: string[] = ["NextJS","TypeScript","React","Tailwind CSS","NodeJS","Express","MongoDB","MySQL","REST APIs","GitHub","Vercel","VS Code","Bootstrap","Solidity","C","C++","Java","Redux","foundry","Web3.js","Ethers.js","Zod","MUI","Shadcn","Remix", ];