import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Nav() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [scrollTimeout, setScrollTimeout] = useState<number>(0);

  const handleScroll = (): void => {
    if (scrollTimeout) clearTimeout(scrollTimeout);

    const currentScrollY = window.scrollY;
    const isAtTop = currentScrollY < 10;

    const timeout = setTimeout(() => {
      if (isAtTop) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        // setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }, 50);

    setScrollTimeout(timeout);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  const location = useLocation();
  const path = location.pathname;
  const linkStyle = "hover:scale-105 text-black transform font-libre-baskerville transition duration-300 ease-in-out text-xl";

  return (
    <nav className={`transition-all bg-realWhite z-[100] w-full ${isVisible ? "translate-y-0" : "-translate-y-full"} transition-max-height hover:shadow-md bg-opacity-50 hover:bg-opacity-100 duration-300 ease-in-out fixed top-0  p-4 border-b border-black `}>
      <ul className="flex justify-around ">
        <li className={`${linkStyle} ${path === "/" && "font-bold"}`}>
          <Link to="/">home</Link>
        </li>
        <li className={`${linkStyle} ${path.includes("services") && "font-bold"}`}>
          <Link to="/services">services</Link>
        </li>
        <li className={`${linkStyle} ${path.includes("projects") && "font-bold"}`}>
          <Link to="/projects">projects</Link>
        </li>
        <li className={`${linkStyle} ${path.includes("about") && "font-bold"}`}>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
}
