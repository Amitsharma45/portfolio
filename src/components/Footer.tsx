import { Link } from '@radix-ui/themes'
import React from 'react'


const Footer = () => {
  return (
    <footer className='w-full px-[400px] max-[1285px]:px-[350px] max-lg:px-64 max-sm:px-4 py-10 flex flex-col max-sm:text-center items-center mt-4 pb-8'>
        <div className="w-full">
            <p className='text-sm max-sm:text-xs'>Portfolio inspired by <Link href='https://x.com/intent/follow?screen_name=mannupaaji' target='_blank' >Manu Arora </Link>and <Link href='https://x.com/intent/follow?screen_name=dillionverma' target='_blank'>Dillon Verma </Link></p>
        </div>
        
    </footer>
  )
}

export default Footer