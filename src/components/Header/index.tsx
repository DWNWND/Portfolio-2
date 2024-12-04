export default function Header() {
  return (
    <header className="relative w-full h-screen backgroundImage border-b">
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center flex flex-col justify-center items-center gap-5 mb-20">
          <h2 className=" font-libre-baskerville text-4xl">I make professional websites and web-applications</h2>
        </div>
        <button className="hover:scale-105 bg-cta-ctaPrimary2 bg-opacity-100 hover:bg-opacity-80 font-nunito-sans rounded-full text-xl text-white px-12 py-5 transition ease-in-out duration-300 hover:shadow-md">work with me</button>
      </div>
    </header>
  );
}
