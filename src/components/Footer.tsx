import { Flex, Link, Separator, Tooltip } from '@radix-ui/themes'
import { GitHubLogoIcon, LinkedInLogoIcon, FileIcon, CodeIcon, RowsIcon } from '@radix-ui/react-icons'
import { FaXTwitter } from "react-icons/fa6";
import React from 'react'


const Footer = () => {
  return (
    <footer className='py-6 flex justify-end fixed bottom-0 right-5'>
        <div className="rounded-3xl h-[300px] px-2 py-4 bg-white bg-opacity-10 backdrop-blur-md z-50 border dark:border-white/20 flex flex-col items-center">
        <Flex gap='5' justify='center' align='center' px='2' direction='column' >
            <div>
                <Tooltip content="Resume">
                    <Link href="https://drive.google.com/file/d/1BvmKeNsKERxnUUIRJcGf-grLydwr-yfn/view?usp=sharing" target='blank' underline='none'>
                        <FileIcon width={20} height={20} className='text-black dark:text-white hover:scale-110'/>
                    </Link>
                </Tooltip>
            </div>

            <div>
                <Tooltip content="Blog">
                    <Link href="/blogs">
                        <RowsIcon width={17} height={17} className='text-black dark:text-white hover:scale-110'/>
                    </Link>
                </Tooltip>
            </div>
            <Separator orientation='horizontal' size='1' className='bg-black dark:bg-gray-400' />
            <div>
                <Tooltip content="Github">
                    <Link href="https://github.com/Fardeen26" target='blank'>
                        <GitHubLogoIcon width={20} height={20} className='text-black dark:text-white hover:scale-110' />
                    </Link>
                </Tooltip>
            </div>
            <div>
                <Tooltip content="X">
                    <Link href="https://twitter.com/fardeen14693425" target='blank'>
                        <FaXTwitter width={20} height={20} className='text-black dark:text-white hover:scale-110' />
                    </Link>
                </Tooltip>
            </div>
            <div>
                <Tooltip content="Linkedin">
                    <Link href="https://www.linkedin.com/in/fardeenmansoori/" target='blank'>
                        <LinkedInLogoIcon width={20} height={20} className='text-black dark:text-white hover:scale-110' />
                    </Link>
                </Tooltip>
            </div>
            <div>
                <Tooltip content="Geeks for Geeks">
                    <Link href="https://www.geeksforgeeks.org/user/fardeenmanxtyn/" target='blank'>
                        <CodeIcon width={20} height={20} className='text-black dark:text-white hover:scale-110' />
                    </Link>
                </Tooltip>
            </div>

        </Flex>
        </div>
        
    </footer>
  )
}

export default Footer