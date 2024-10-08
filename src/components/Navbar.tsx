'use client';
import React from 'react';
import { useContext } from 'react';
import { Link, Separator, Tooltip } from '@radix-ui/themes';
import { GitHubLogoIcon, SunIcon, MoonIcon, FileIcon, RowsIcon, LinkedInLogoIcon, CodeIcon, HomeIcon } from '@radix-ui/react-icons';
import { DarkModeContext } from '@/context/DarkModeContext';
import { usePathname } from 'next/navigation';
import { FaXTwitter } from 'react-icons/fa6';
import { IoPerson } from "react-icons/io5";
import { SiGeeksforgeeks } from "react-icons/si";


const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("darkModeContext is possibly undefined!");
    }
    return context;
};

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const pathname = usePathname();

    return (
        <nav className='w-full py-6 flex justify-center fixed top-0 z-50'>
            <div className="rounded-full w-[900px] max-[400px]:w-[345px] max-[450px]:w-[400px] px-2 py-1 bg-white bg-opacity-10 backdrop-blur-md border dark:border-white/20 flex items-center justify-center dark:shadow-none shadow">
                <div className='flex justify-center px-2 items-center max-sm:gap-4 gap-8 max-[400px]:gap-4 max-[450px]:gap-5 transition-all'>

                        <Tooltip content="Home">
                            <div className='hover:px-3 max-sm:hover:px-2 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <Link href="/" underline='none'>
                                    <HomeIcon className={`w-5 h-5 max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == '/' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`}/>
                                </Link>
                            </div>
                        </Tooltip>

                        <Tooltip content="Projects">
                            <div className='hover:px-3 max-sm:hover:px-2 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <Link href="/projects">
                                    <CodeIcon className={`w-5 h-5 max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == '/projects' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`} />
                                </Link>
                            </div>
                        </Tooltip>

                        <Tooltip content="Blog">
                            <div className='hover:px-3 max-sm:hover:px-2 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <Link href="/blogs">
                                    <RowsIcon className={`w-[17px] h-[17px] max-sm:w-[13px] max-sm:h-[13px] text-black dark:text-white ${pathname == '/blogs' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`}/>
                                </Link>
                            </div>
                        </Tooltip>

                        <Tooltip content="About">
                            <div className='hover:px-3 max-sm:hover:px-2 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <Link href="/about">
                                    <IoPerson className={`w-5 h-5 max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == '/about' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`}/>
                                </Link>
                            </div>
                        </Tooltip>

                        <Separator orientation='vertical' size={{sm: '1', lg: '2', xl: '2'}} className='bg-black dark:bg-gray-400' />

                        <Tooltip content="Resume">
                            <div className='hover:px-3 max-sm:hover:px-2 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <Link href="https://drive.google.com/file/d/1BvmKeNsKERxnUUIRJcGf-grLydwr-yfn/view?usp=sharing" target='blank' underline='none'>
                                    <FileIcon className='w-5 h-5 max-sm:h-[15px] max-sm:w-[15px] text-black dark:text-white'/>
                                </Link>
                            </div>
                        </Tooltip>

                        <Tooltip content="Github">
                            <div className='hover:px-3 max-sm:hover:px-2 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <Link href="https://github.com/Fardeen26" target='blank'>
                                    <GitHubLogoIcon className='w-5 h-5 max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
                                </Link>
                            </div>
                        </Tooltip>

                        <Tooltip content="X">
                            <div className='hover:px-3 max-sm:hover:px-2 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <Link href="https://x.com/intent/follow?screen_name=fardeen14693425" target='blank'>
                                    <FaXTwitter className='w-[18px] h-[18px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
                                </Link>
                            </div>
                        </Tooltip>

                        <Tooltip content="Linkedin">
                            <div className='hover:px-3 max-sm:hover:px-2 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <Link href="https://www.linkedin.com/in/fardeenmansoori/" target='blank'>
                                    <LinkedInLogoIcon width={15} height={15} className='w-5 h-5 max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
                                </Link>
                            </div>
                        </Tooltip>

                        <Tooltip content="Geeks for Geeks">
                            <div className='hover:px-3 max-sm:hover:px-2 py-3 max-sm:hidden dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <Link href="https://www.geeksforgeeks.org/user/fardeenmanxtyn/" target='blank'>
                                    <SiGeeksforgeeks className='h-5 w-5 text-black dark:text-white' />
                                </Link>
                            </div>
                        </Tooltip>

                        <Separator orientation='vertical' size={{sm: '1', lg: '2', xl: '2'}}  className='bg-black dark:bg-gray-400' />

                        <div className='hover:px-3 max-sm:hover:px-2 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                            <div className='flex items-center'>
                                <button onClick={toggleDarkMode}>
                                    {isDarkMode ? <MoonIcon className='w-[19px] h-[19px] max-sm:w-[14px] max-sm:h-[14px]'/> : <SunIcon className='w-5 h-5 max-sm:w-[15px] max-sm:h-[15px]'/>}
                                </button>
                            </div>
                        </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
