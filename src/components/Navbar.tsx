'use client';
import React from 'react';
import { useContext } from 'react';
import { Flex, Link, Separator } from '@radix-ui/themes';
import { GitHubLogoIcon, SunIcon, HamburgerMenuIcon, MoonIcon } from '@radix-ui/react-icons';
import { DarkModeContext } from '@/context/DarkModeContext';
import { usePathname } from 'next/navigation';
import { inter } from '@/utils/fonts';

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
            <div className="rounded-xl w-[1100px] max-sm:w-[350px] px-2 py-3 bg-white bg-opacity-10 backdrop-blur-md border dark:border-white/20 flex items-center">
                <Flex gap='8' justify='center' align='center' width='1000px' className={`pl-10 max-sm:hidden ${inter}`}>
                    <div>
                        <Link href="/" underline='none' className={`text-black dark:text-white text-[15px] font-medium tracking-tight text-center ${pathname == '/' ? 'dark:!text-blue-400 text-blue-500' : ''}`}>Home</Link>
                    </div>
                    <div>
                        <Link href="/blogs" underline='none' className={`text-black dark:text-white text-[15px] font-medium tracking-tight text-center ${pathname == '/blogs' ? 'dark:!text-blue-400 text-blue-500' : ''}`}>Blog</Link>
                    </div>
                    <div className='relative'>
                        <Link href="/projects" underline='none' className={`text-black dark:text-white text-[15px] font-medium tracking-tight text-center ${pathname == '/projects' ? 'dark:!text-blue-400 text-blue-500' : ''}`}>Projects</Link>
                    </div>
                    <div>
                        <Link href="/about" underline='none' className={`text-black dark:text-white text-[15px] font-medium tracking-tight text-center ${pathname == '/about' ? 'dark:!text-blue-400 text-blue-500' : ''}`}>About</Link>
                    </div>
                </Flex>

                <div className="hidden max-sm:block w-full pl-3">
                    <HamburgerMenuIcon width={22} height={22}/>
                </div>

                <Separator orientation='vertical' size='1' className='bg-black dark:bg-gray-400' />

                <Flex gap='4' justify='center' align='center' width='100px' className='pl-4'>
                    <div>
                        <Link href="https://github.com/Fardeen26" target='blank' className='text-black dark:text-white'>
                            <GitHubLogoIcon width={20} height={20} />
                        </Link>
                    </div>
                    <div className='flex items-center'>
                        <button onClick={toggleDarkMode} className='transition-all'>
                            {isDarkMode ? <MoonIcon width={19} height={19} /> : <SunIcon width={20} height={20} />}
                        </button>
                    </div>
                </Flex>
            </div>
        </nav>
    );
}

export default Navbar;
