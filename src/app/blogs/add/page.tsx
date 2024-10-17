import React from 'react'
import CreateBlog from './components/CreateBlog'


const page = () => {
    return (
        <div className='mt-44 w-full px-64 max-[1285px]:px-52 max-lg:px-4 max-sm:px-5 flex flex-col items-center pb-8'>
            <CreateBlog />
        </div>
    )
}

export default page