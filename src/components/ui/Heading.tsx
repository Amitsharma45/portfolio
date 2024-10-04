'use client'
import React from 'react'
import { I_Heading } from '@/types/project'
import { bricolage_grotesque } from '@/utils/fonts';


const Heading = ({title}: I_Heading) => {
  return (
    <div className='px-40 max-sm:px-2'>
        <h1 className={`text-[2rem] font-semibold tracking-tight text-start ${bricolage_grotesque}`}>
            {title}
        </h1>
    </div>
  )
}

export default Heading