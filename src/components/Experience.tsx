import Image from 'next/image'
import React from 'react'
import { MagicCard } from './ui/magic-card'
import { Link } from '@radix-ui/themes'
import Heading from './ui/heading'

const Experience = () => {
  return (
    <div className='w-1/2 max-sm:px-2 flex flex-col items-center mt-4 pb-8'>
        <Heading title='Experience'/>

        <MagicCard className="cursor-pointer shadow-2xl mt-5 !bg-transparent border-none" gradientColor= "#262626">
          <div className="flex w-full px-5 py-3 bricolage-grotesque">
            <div className="w-24 flex items-center justify-center">
                <Link href='https://www.apnacollege.in/'>
                  <Image src='/company1.jpeg' alt='company-logo' width={50} height={50} className='rounded-full'/>                
                </Link>
            </div>
            <div className="w-full">
              <div className="">
                <div className="flex justify-between">
                  <h1 className='text-lg font-semibold'>Apna College</h1>
                  <span className='text-xs'>Feb 2024 - June 2024</span>
                </div>
                <h2 className='text-sm'>Teaching Assistant (MERN STACK)</h2>
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

export default Experience