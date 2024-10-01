import Avatar from "./components/Avatar";
import BlurIn from "@/components/ui/blur-in";
import ProjectCardList from "../projects/components/ProjectCardList";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
  
export default function Home() {
  return (
    <>
    <div className="w-full flex justify-center py-5 pt-28">
      <div className="w-2/3">
        <div className="flex justify-center">
          <Avatar />
        </div>
        <div className="mt-3 px-32 max-sm:px-2">
          <BlurIn
            word="Hi, I&apos;m Fardeen Mansoori👋"
            className="!text-[3rem] font-bold tracking-tight text-center bricolage-grotesque"
          />
          <BlurIn
              word="I specialize in building Web2 and Web3 apps from the ground up. With hands-on experience in full-stack development and blockchain technology, I turn complex ideas into scalable solutions. Check out my work or catch me on Twitter for current updates and the occasional meme."
              className="mt-1 !text-base text-center !font-normal !tracking-normal inter !leading-6"
          />
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
    </>
  );
}
