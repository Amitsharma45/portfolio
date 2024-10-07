import { Link } from '@radix-ui/themes'
import React from 'react'


const Footer = () => {
  return (
    <footer className='w-full px-[400px] max-sm:px-2 py-10 flex flex-col items-center mt-4 pb-8'>
        <div className="w-full">
            <p className='text-sm'>Portfolio inspired by <Link href='https://x.com/intent/follow?screen_name=mannupaaji'> Manu Arora </Link>and <Link href='https://x.com/intent/follow?screen_name=dillionverma'>Dillon Verma </Link></p>
        </div>
        
    </footer>
  )
}

export default Footer