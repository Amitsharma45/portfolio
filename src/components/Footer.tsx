import { Flex, Link, Separator, Tooltip } from '@radix-ui/themes'
import { GitHubLogoIcon, TwitterLogoIcon, LinkedInLogoIcon, FileIcon, CodeIcon, RowsIcon } from '@radix-ui/react-icons'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full py-6 flex justify-end fixed bottom-0 right-5'>
        <div className="rounded-3xl h-[300px] px-2 py-4 bg-white bg-opacity-10 backdrop-blur-md z-50 border border-white/20 flex flex-col items-center">
        <Flex gap='5' justify='center' align='center' px='2' direction='column' >
            <div>
                <Tooltip content="Resume">
                    <Link href="https://github.com/Fardeen26" className='text-black dark:text-white hover:text-purple-300'>
                        <FileIcon width={20} height={20} />
                    </Link>
                </Tooltip>
            </div>

            <div>
                <Tooltip content="Blog">
                    <Link href="#" className='text-black dark:text-white hover:text-purple-300'>
                        <RowsIcon width={17} height={17} />
                    </Link>
                </Tooltip>
            </div>
            <Separator orientation='horizontal' size='1' className='bg-black dark:bg-gray-400' />
            <div>
                <Tooltip content="Github">
                    <Link href="https://github.com/Fardeen26" className='text-black dark:text-white hover:text-purple-300'>
                        <GitHubLogoIcon width={20} height={20} />
                    </Link>
                </Tooltip>
            </div>
            <div>
                <Tooltip content="x (twitter)">
                    <Link href="#" className='text-black dark:text-white hover:text-purple-400'>
                        <TwitterLogoIcon width={20} height={20} />
                    </Link>
                </Tooltip>
            </div>
            <div>
                <Tooltip content="Linkedin">
                    <Link href="https://github.com/Fardeen26" className='text-black dark:text-white hover:text-purple-300'>
                        <LinkedInLogoIcon width={20} height={20} />
                    </Link>
                </Tooltip>
            </div>
            <div>
                <Tooltip content="Geeks for Geeks">
                <Link href="#" className='text-black dark:text-white hover:text-purple-300'>
                    <CodeIcon width={20} height={20} />
                </Link>
                </Tooltip>
            </div>

        </Flex>
        </div>
        
    </footer>
  )
}

export default Footer