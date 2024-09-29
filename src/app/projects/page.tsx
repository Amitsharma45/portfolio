import React from 'react'
import ProjectCardList from './components/ProjectCardList';

const Projects = () => {
  return (
    <div className='w-full px-64 max-sm:px-2 flex flex-col items-center mt-4 pb-8'>
        <div className='px-40 max-sm:px-2'>
            <h1 className='text-[2rem] font-bold tracking-tight text-start font-sans'>
                Projects
            </h1>
        </div>
        <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-sm:px-2 flex-wrap items-center ml-7 max-sm:ml-0">
            <ProjectCardList />
        </div>
    </div>
  )
}

export default Projects