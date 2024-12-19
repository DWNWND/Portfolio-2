import { useState, useEffect } from "react";
import { useScreenSizeCheckHook } from "../../../hooks/useScreenSizeCheckHook";

export default function Nav() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const isMobile = useScreenSizeCheckHook();
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = (): void => {
    const currentScrollY = window.scrollY;
    const isAtTop = currentScrollY < 10;

    if (isAtTop) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = activeSection;

      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;

        if (sectionTop <= 50 && sectionTop + sectionHeight > 300) {
          currentSection = section.getAttribute("id") || "";
          break; 
        }
      }
      if (currentSection !== activeSection) {
        console.log("Active section:", currentSection);
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const linkStyle = "text-black transform font-nunito-sans transition duration-300 ease-in-out text-lg";

  return (
    <>
      <nav className={`transition-all bg-white z-[100] w-full ${isVisible ? "translate-y-0" : "-translate-y-full"} transition-max-height hover:shadow-md duration-300 ease-in-out fixed top-0 p-4 border-b border-black`}>
        <ul className="flex justify-around items-center">
          <li className={`${linkStyle} ${activeSection === "home" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
            <a href="#home" className="relative">
              <span>home</span>
              <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "home" ? "w-full" : "group-hover:w-full"}`}></span>
            </a>
          </li>
          <li className={`${linkStyle} ${activeSection === "services" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
            <a href="#services" className="relative">
              <span>services</span>
              <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "services" ? "w-full" : "group-hover:w-full"}`}></span>
            </a>
          </li>
          <li className={`${linkStyle} ${activeSection === "packages" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
            <a href="#packages" className="relative">
              <span>packages</span>
              <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "packages" ? "w-full" : "group-hover:w-full"}`}></span>
            </a>
          </li>
          {!isMobile && <h1 className="font-meow-script-regular xl:text-6xl">devThea</h1>}

          <li className={`${linkStyle} ${activeSection === "about" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
            <a href="#about" className="relative">
              <span>about</span>
              <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "about" ? "w-full" : "group-hover:w-full"}`}></span>
            </a>
          </li>
          <li className={`${linkStyle} ${activeSection === "contact" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
            <a href="#contact" className="relative">
              <span>contact</span>
              <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "contact" ? "w-full" : "group-hover:w-full"}`}></span>
            </a>
          </li>
          <li className={`${linkStyle} ${activeSection === "portfolio" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
            <a href="#portfolio" className="relative">
              <span>portfolio</span>
              <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "portfolio" ? "w-full" : "group-hover:w-full"}`}></span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}