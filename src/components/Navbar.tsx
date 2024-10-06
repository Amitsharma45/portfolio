'use client';
import React from 'react';
import { useContext } from 'react';
import { Flex, Link, Separator, Tooltip } from '@radix-ui/themes';
import { GitHubLogoIcon, SunIcon, HamburgerMenuIcon, MoonIcon, FileIcon, RowsIcon, LinkedInLogoIcon, CodeIcon, HomeIcon } from '@radix-ui/react-icons';
import { DarkModeContext } from '@/context/DarkModeContext';
import { usePathname } from 'next/navigation';
// import { inter } from '@/utils/fonts';
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
        // <nav className='w-full py-6 flex justify-center fixed top-0 z-50'>
        //     <div className="rounded-xl w-[1100px] max-sm:w-[350px] px-2 py-3 bg-white bg-opacity-10 backdrop-blur-md border dark:border-white/20 flex items-center">
        //         <Flex gap='8' justify='center' align='center' width='1000px' className={`pl-10 max-sm:hidden ${inter}`}>
        //             <div>
        //                 <Link href="/" underline='none' className={`text-black dark:text-white text-[15px] font-medium tracking-tight text-center ${pathname == '/' ? 'dark:!text-blue-400 text-blue-500' : ''}`}>Home</Link>
        //             </div>
        //             <div>
        //                 <Link href="/blogs" underline='none' className={`text-black dark:text-white text-[15px] font-medium tracking-tight text-center ${pathname == '/blogs' ? 'dark:!text-blue-400 text-blue-500' : ''}`}>Blog</Link>
        //             </div>
        //             <div className='relative'>
        //                 <Link href="/projects" underline='none' className={`text-black dark:text-white text-[15px] font-medium tracking-tight text-center ${pathname == '/projects' ? 'dark:!text-blue-400 text-blue-500' : ''}`}>Projects</Link>
        //             </div>
        //             <div>
        //                 <Link href="/about" underline='none' className={`text-black dark:text-white text-[15px] font-medium tracking-tight text-center ${pathname == '/about' ? 'dark:!text-blue-400 text-blue-500' : ''}`}>About</Link>
        //             </div>
        //         </Flex>

        //         <div className="hidden max-sm:block w-full pl-3">
        //             <HamburgerMenuIcon width={22} height={22}/>
        //         </div>

        //         <Separator orientation='vertical' size='1' className='bg-black dark:bg-gray-400' />

        //         <Flex gap='4' justify='center' align='center' width='100px' className='pl-4'>
        //             <div>
        //                 <Link href="https://github.com/Fardeen26" target='blank' className='text-black dark:text-white'>
        //                     <GitHubLogoIcon width={20} height={20} />
        //                 </Link>
        //             </div>
        //             <div className='flex items-center'>
        //                 <button onClick={toggleDarkMode} className='transition-all'>
        //                     {isDarkMode ? <MoonIcon width={19} height={19} /> : <SunIcon width={20} height={20} />}
        //                 </button>
        //             </div>
        //         </Flex>
        //     </div>
        // </nav>

        <nav className='w-full py-6 flex justify-center fixed top-0 z-50'>
            <div className="rounded-full w-[850px] max-sm:w-[350px] px-2 py-1 bg-white bg-opacity-10 backdrop-blur-md border dark:border-white/20 flex items-center justify-center dark:shadow-none shadow">
            <Flex gap='6' justify='center' align='center' px='2' direction='row' className='transition-all'>

                <Tooltip content="Home">
            <div className='hover:px-3 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                    <Link href="/" underline='none'>
                        <HomeIcon width={20} height={20} className={`text-black dark:text-white ${pathname == '/' ? 'dark:!text-[#FFC83D] text-[#cc9e2b]' : ''}`}/>
                    </Link>
            </div>
                </Tooltip>

                <Tooltip content="Projects">
            <div className='hover:px-3 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                    <Link href="/projects">
                        <CodeIcon width={20} height={20} className={`text-black dark:text-white ${pathname == '/projects' ? 'dark:!text-[#FFC83D] text-[#cc9e2b]' : ''}`} />
                    </Link>
            </div>
                </Tooltip>

                <Tooltip content="Blog">
            <div className='hover:px-3 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                    <Link href="/blogs">
                        <RowsIcon width={16} height={16} className={`text-black dark:text-white ${pathname == '/blogs' ? 'dark:!text-[#FFC83D] text-[#cc9e2b]' : ''}`}/>
                    </Link>
            </div>
                </Tooltip>

                <Tooltip content="About">
            <div className='hover:px-3 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                    <Link href="/about">
                        <IoPerson width={20} height={20} className={`w-[19px] h-[19px] text-black dark:text-white ${pathname == '/about' ? 'dark:!text-[#FFC83D] text-[#cc9e2b]' : ''}`}/>
                    </Link>
            </div>
                </Tooltip>

            <Separator orientation='vertical' size='2' className='bg-black dark:bg-gray-400' />

                <Tooltip content="Resume">
            <div className='hover:px-3 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                    <Link href="https://drive.google.com/file/d/1BvmKeNsKERxnUUIRJcGf-grLydwr-yfn/view?usp=sharing" target='blank' underline='none'>
                        <FileIcon width={20} height={20} className='text-black dark:text-white'/>
                    </Link>
            </div>
                </Tooltip>

                <Tooltip content="Github">
            <div className='hover:px-3 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                    <Link href="https://github.com/Fardeen26" target='blank'>
                        <GitHubLogoIcon width={20} height={20} className='text-black dark:text-white' />
                    </Link>
            </div>
                </Tooltip>

                <Tooltip content="X">
            <div className='hover:px-3 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                    <Link href="https://twitter.com/fardeen14693425" target='blank'>
                        <FaXTwitter className='h-[18px] w-[18px] text-black dark:text-white' />
                    </Link>
            </div>
                </Tooltip>
                <Tooltip content="Linkedin">
            <div className='hover:px-3 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                    <Link href="https://www.linkedin.com/in/fardeenmansoori/" target='blank'>
                        <LinkedInLogoIcon width={20} height={20} className='text-black dark:text-white' />
                    </Link>
            </div>
                </Tooltip>

            <Tooltip content="Geeks for Geeks">
                <div className='hover:px-3 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                    <Link href="https://www.geeksforgeeks.org/user/fardeenmanxtyn/" target='blank'>
                        <SiGeeksforgeeks className='h-5 w-5 text-black dark:text-white' />
                    </Link>
                </div>
            </Tooltip>

            <Separator orientation='vertical' size='2' className='bg-black dark:bg-gray-400' />

            <div className='hover:px-3 py-3 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                <div className='flex items-center'>
                    <button onClick={toggleDarkMode}>
                        {isDarkMode ? <MoonIcon width={19} height={19} /> : <SunIcon width={20} height={20} />}
                    </button>
                </div>
            </div>

        </Flex>
            </div>
        </nav>
    );
}

export default Navbar;
