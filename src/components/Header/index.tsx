export default function Header() {
  return (
    <header className="relative w-full h-screen backgroundImage border-b">
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="font-meow-script-regular text-center text-6xl mb-10 ">I'm Thea</h1>
        <div className="text-center flex flex-col justify-center items-center gap-5 mb-16 md:mb-20">
          <h2 className=" font-libre-baskerville text-4xl">I make professional websites and web-applications for a living</h2>
        </div>
      </div>
    </header>
  );
}
