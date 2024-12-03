export default function Header() {
  return (
    <header className="relative w-full h-screen backgroundImage border-b">
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center flex flex-col justify-center items-center gap-5 mb-16">
          <h1 className="font-meow-script-regular xl:text-9xl">I'm Thea</h1>
          <h2 className="font-nunito-sans text-2xl">I make professional websites and web-applications</h2>
        </div>
        <button className="hover:scale-105 bg-cta-ctaPrimary bg-opacity-50 hover:bg-cta-ctaSecondary font-libre-baskerville text-xl border rounded-full px-10 py-4 transition ease-in-out duration-300 hover:shadow-md">work with me</button>
      </div>
    </header>
  );
}
