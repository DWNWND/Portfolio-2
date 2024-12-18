import { useScreenSizeCheckHook } from "../../hooks/useScreenSizeCheckHook";

export default function Header() {
  const isMobile = useScreenSizeCheckHook();

  return (
    <header className="relative w-full h-screen backgroundImage border-b">
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {isMobile && <h1 className="font-meow-script-regular text-center text-6xl mb-10 ">I'm Thea</h1>}
        <div className="text-center flex flex-col justify-center items-center gap-5 mb-16 md:mb-20 bg-realWhite p-4 w-full">
          <h2 className=" font-libre-baskerville text-4xl">I make professional websites and web-applications for a living</h2>
        </div>
        <div className="relative group">
          <a href="#packages" className="block text-center hover:scale-105 bg-cta-primary2 bg-opacity-100 z-[20] relative font-nunito-sans rounded-full text-xl text-white px-12 py-5 transition-all ease-in-out duration-300 group-hover:shadow-lg group-hover:bg-gradient-to-r from-blue-500 to-purple-600">
           check pricing packages
          </a>
          <div className="rounded-full w-full h-full top-2 left-2 absolute bg-black z-[10] transition-all duration-300 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:opacity-50"></div>
        </div>
      </div>
    </header>
  );
}
