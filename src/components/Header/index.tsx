export default function Header() {
  return (
    <header className="relative w-full h-screen backgroundImage border-b">
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center flex flex-col justify-center items-center gap-5 mb-20">
          <h2 className=" font-libre-baskerville text-4xl">I make professional websites and web-applications for a living</h2>
        </div>
        <div className="relative group">
          <button className="hover:scale-105 bg-cta-ctaPrimary2 bg-opacity-100 z-[20] relative font-nunito-sans rounded-full text-xl text-white px-12 py-5 transition-all ease-in-out duration-300 group-hover:shadow-lg group-hover:bg-gradient-to-r from-blue-500 to-purple-600">work with me</button>
          <div className="rounded-full w-full h-full top-2 left-2 absolute bg-black z-[10] transition-all duration-300 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:opacity-50"></div>
        </div>
      </div>
    </header>
  );
}
