'use client'
import Avatar from "./components/Avatar";
import ProjectCardList from "../projects/components/ProjectCardList";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Link as ScrollLink } from 'react-scroll';
import Coursework from "@/components/Coursework";
import { inter, bricolage_grotesque } from '@/utils/fonts';
import About from "../about/components/About";
import Contact from "@/components/Contact";
  
export default function Home() {
  return (
    <>
    <div className="w-full flex justify-center py-5 pt-32 dark:bg-black">
      <div className="w-2/3 max-sm:w-full flex flex-col items-center">
        <div>
          <Avatar />
        </div>
        <div className="mt-4 px-32 max-sm:px-4">

          <h1 className={`!text-[3rem] mt-2 max-sm:!text-[1.6rem] !whitespace-nowrap font-bold tracking-tight text-center ${bricolage_grotesque}`}>Hi, I&apos;m Fardeen Mansoori👋</h1>

          <h1 className={`mt-2 max-sm:mt-5 max-sm:px-3 !text-base max-sm:!text-sm text-center !font-normal !tracking-normal inter !leading-6 ${inter}`}>I specialize in building Web2 and Web3 apps from the ground up. With hands-on experience in full-stack development and blockchain technology, I turn complex ideas into scalable solutions. Check out my work or catch me on Twitter for current updates and the occasional meme.</h1>

        </div>
        <div className="mt-10">
            <RainbowButton>
              <ScrollLink to="contact-section" activeClass="active" smooth={true} offset={-120} duration={1100}>Get in touch</ScrollLink>
            </RainbowButton>
        </div>
      </div>
      
    </div>
      <div className="w-full flex justify-center mt-16">
        <ProjectCardList />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Skills />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Experience />
      </div>
      
      <div className="w-full flex justify-center mt-4">
        <Education />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Coursework />
      </div>

      <div className="w-full flex justify-center mt-4">
        <About />
      </div>

      <div className="w-full flex justify-center mt-4" id="contact-section">
        <Contact />
      </div>
    </>
  );
}
