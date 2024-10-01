import React from 'react'
import { MagicCard } from './ui/magic-card'
import Image from 'next/image'
import { Link } from '@radix-ui/themes'

const Education = () => {
  return (
    <div className='w-1/2 max-sm:px-2 flex flex-col items-center mt-4 pb-8 bricolage-grotesque'>
        <div className='px-40 max-sm:px-2 text-center'>
              <h1 className='text-[2rem] font-semibold tracking-tight text-start'>
                  Education
              </h1>
        </div>

        <MagicCard className="cursor-pointer shadow-2xl mt-5 !bg-transparent border-none" gradientColor= "#262626">
          <div className="flex w-full px-5 py-3">
            <div className="w-24 flex items-center justify-center">
                <Link href='https://www.uok.ac.in/'>
                    <Image src='/uok.gif' alt='company-logo' width={50} height={50} className='rounded-full'/>
                </Link>
            </div>
            <div className="w-full">
              <div className="">
                <div className="flex justify-between">
                  <h1 className='text-lg font-semibold'>Bachelors of Computer Application</h1>
                  <span className='text-xs'>Expected July 2025</span>
                </div>
                <h2 className='text-sm'>University of Kota &nbsp; &nbsp; cgpa: 8.5</h2>
                {/* <h2 className='text-sm'>CGPA: 8.5</h2> */}
              </div>
              <div className="mt-3 text-sm">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto maxime harum facere voluptas officiis doloribus nobis accusamus, laboriosam ratione in!</p>
              </div>
            </div>
          </div>
        </MagicCard>
    </div>
  )
}

export default Education