import Avatar from "@/components/Avatar";

  
export default function Home() {
  return (
    <div className="w-full flex justify-center py-5">
      <div className="w-2/3">
        <div className="flex justify-center">
          <Avatar />
        </div>
        <div className="mt-3 px-32">
          <h1 className="text-[3rem] font-bold tracking-tight text-center font-sans">Hi, I&apos;m Fardeen Mansoori👋</h1>
          <p className="mt-3 text-lg text-center font-medium font-sans tracking-tighter">I specialize in building Web2 and Web3 apps from the ground up. With hands-on experience in full-stack development and blockchain technology, I turn complex ideas into scalable solutions. Check out my work or catch me on Twitter for tech insights and the occasional meme.</p>
        </div>
      </div>
    </div>
  );
}
