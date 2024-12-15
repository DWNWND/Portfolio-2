import { useState, useEffect } from "react";

export default function Nav() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>("home");

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

  //this works badly - making a laggy experience
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null, // Observe relative to the viewport
      threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Threshold for 0% to 100%
    };

    const observer = new IntersectionObserver((entries) => {
      // Sort entries by intersection ratio (most visible section first)
      const sortedEntries = entries
        .filter((entry) => entry.isIntersecting) // Only include intersecting entries
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      // Update active section to the most visible one
      if (sortedEntries.length > 0) {
        const mostVisible = sortedEntries[0];
        if (mostVisible.target.id !== activeSection) {
          setActiveSection(mostVisible.target.id);
        }
      }
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const linkStyle = "text-black transform font-nunito-sans transition duration-300 ease-in-out text-lg";

  return (
    <>
      <nav className={`transition-all bg-realWhite z-[100] w-full ${isVisible ? "translate-y-0" : "-translate-y-full"} transition-max-height hover:shadow-md duration-300 ease-in-out fixed top-0 p-4 border-b border-black`}>
        <ul className="flex justify-around items-center">
          <li className={`${linkStyle} ${activeSection === "projects" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
            <a href="#projects" className="relative">
              <span>projects</span>
              <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "projects" ? "w-full" : "group-hover:w-full"}`}></span>
            </a>
          </li>
          <li className={`${linkStyle} ${activeSection === "about" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
            <a href="#about" className="relative">
              <span>about</span>
              <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "about" ? "w-full" : "group-hover:w-full"}`}></span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
