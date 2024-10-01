import { Flex, Link, Separator } from '@radix-ui/themes'
import { GitHubLogoIcon, SunIcon } from '@radix-ui/react-icons'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full py-6 flex justify-center fixed top-0 z-50'>
        <div className="rounded-xl w-[1100px] px-2 py-3 bg-white bg-opacity-10 backdrop-blur-md border border-white/20 flex items-center">
        <Flex gap='8' justify='center' align='center' width='1000px' className='pl-10'>
            <div>
                <Link href="/" className='text-black dark:text-white text-[15px] font-medium tracking-tight text-center inter'>Home</Link>
            </div>
            <div>
                <Link href="/blogs" className='text-black dark:text-white text-[15px] font-medium tracking-tight text-center inter'>Blog</Link>
            </div>
            <div>
                <Link href="/projects" className='text-black dark:text-white text-[15px] font-medium tracking-tight text-center inter'>Projects</Link>
            </div>
            <div>
                <Link href="/about" className='text-black dark:text-white text-[15px] font-medium tracking-tight text-center inter'>About</Link>
            </div>
        </Flex>

        <Separator orientation='vertical' size='1' className='bg-black dark:bg-gray-400' />

        <Flex gap='4' justify='center' align='center' width='100px' className='pl-5'>
            <div>
                <Link href="https://github.com/Fardeen26" target='blank' className='text-black dark:text-white'>
                    <GitHubLogoIcon width={20} height={20} />
                </Link></div>
            <div>
                <Link href="#" className='text-black dark:text-white'>
                    <SunIcon width={20} height={20} />
                </Link>
            </div>
        </Flex>
    </div>
</nav>
  )
}

export default Navbar