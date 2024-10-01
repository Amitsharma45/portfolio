import React from 'react'
import { I_Heading } from '@/types/project'


const Heading = ({title} : I_Heading) => {
  return (
    <div className='px-40 max-sm:px-2'>
        <h1 className='text-[2rem] font-semibold tracking-tight text-start font-sans bricolage-grotesque'>
            {title}
        </h1>
    </div>
  )
}

export default Heading