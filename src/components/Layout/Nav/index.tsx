import { useState, useEffect } from "react";
import { useScreenSizeCheckHook } from "../../../hooks/useScreenSizeCheckHook";

export default function Nav() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>("home");
  const isMobile = useScreenSizeCheckHook();

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
          <li className={`${linkStyle} ${activeSection === "services" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
            <a href="#packages" className="relative">
              <span>packages</span>
              <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "services" ? "w-full" : "group-hover:w-full"}`}></span>
            </a>
          </li>
          {!isMobile && <h1 className="font-meow-script-regular xl:text-6xl">I'm Thea</h1>}
          <li className={`${linkStyle} ${activeSection === "about" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
            <a href="#contact" className="relative">
              <span>contact</span>
              <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "about" ? "w-full" : "group-hover:w-full"}`}></span>
            </a>
          </li>
          <li className={`${linkStyle} ${activeSection === "about" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
            <a href="#about" className="relative">
              <span>about</span>
              <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "about" ? "w-full" : "group-hover:w-full"}`}></span>
            </a>
          </li>
          <li className={`${linkStyle} ${activeSection === "projects" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
            <a href="#projects" className="relative">
              <span>projects</span>
              <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "projects" ? "w-full" : "group-hover:w-full"}`}></span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

// import { useState, useEffect } from "react";

// export default function Nav() {
//   const [isVisible, setIsVisible] = useState<boolean>(true);
//   const [lastScrollY, setLastScrollY] = useState<number>(0);
//   const [scrollTimeout, setScrollTimeout] = useState<number>(0);
//   const [activeSection, setActiveSection] = useState<string>("");

//   const handleScroll = (): void => {
//     if (scrollTimeout) clearTimeout(scrollTimeout);

//     const currentScrollY = window.scrollY;
//     const isAtTop = currentScrollY < 10;

//     const timeout = setTimeout(() => {
//       if (isAtTop) {
//         setIsVisible(true);
//       } else if (currentScrollY > lastScrollY) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     }, 50);

//     setScrollTimeout(timeout);
//   };

//   // Detect which section is currently visible
//   useEffect(() => {
//     const sections = document.querySelectorAll("section");
//     const observerOptions = {
//       root: null, // Use the viewport as the root
//       threshold: [0, 0.5, 1],
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           console.log(`Section ${entry.target.id} visibility: ${entry.intersectionRatio}`);
//           setActiveSection(entry.target.id); // Set the id of the currently visible section
//         }
//       });
//     }, observerOptions);

//     sections.forEach((section) => observer.observe(section));

//     return () => {
//       sections.forEach((section) => observer.unobserve(section));
//     };
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (scrollTimeout) clearTimeout(scrollTimeout);
//     };
//   }, [lastScrollY]);

//   const linkStyle = "text-black transform font-nunito-sans transition duration-300 ease-in-out text-lg";

//   return (
//     <nav className={`transition-all bg-realWhite z-[100] w-full ${isVisible ? "translate-y-0" : "-translate-y-full"} transition-max-height hover:shadow-md duration-300 ease-in-out fixed top-0 p-4 border-b border-black`}>
//       <ul className="flex justify-around items-center">
//         <li className={`${linkStyle} ${activeSection === "home" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
//           <a href="#home" className="relative">
//             <span>home</span>
//             <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "home" ? "w-full" : "group-hover:w-full"}`}></span>
//           </a>
//         </li>
//         <li className={`${linkStyle} ${activeSection === "projects" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
//           <a href="#projects" className="relative">
//             <span>projects</span>
//             <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "projects" ? "w-full" : "group-hover:w-full"}`}></span>
//           </a>
//         </li>
//         <h1 className="font-meow-script-regular xl:text-6xl">I'm Thea</h1>
//         <li className={`${linkStyle} ${activeSection === "services" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
//           <a href="#services" className="relative">
//             <span>services</span>
//             <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "services" ? "w-full" : "group-hover:w-full"}`}></span>
//           </a>
//         </li>
//         <li className={`${linkStyle} ${activeSection === "about" ? "scale-105 font-bold" : "hover:scale-105"} group`}>
//           <a href="#about" className="relative">
//             <span>about</span>
//             <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 ${activeSection === "about" ? "w-full" : "group-hover:w-full"}`}></span>
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function Nav() {
//   const [isVisible, setIsVisible] = useState<boolean>(true);
//   const [lastScrollY, setLastScrollY] = useState<number>(0);
//   const [scrollTimeout, setScrollTimeout] = useState<number>(0);

//   const handleScroll = (): void => {
//     if (scrollTimeout) clearTimeout(scrollTimeout);

//     const currentScrollY = window.scrollY;
//     const isAtTop = currentScrollY < 10;

//     const timeout = setTimeout(() => {
//       if (isAtTop) {
//         setIsVisible(true);
//       } else if (currentScrollY > lastScrollY) {
//         setIsVisible(false);
//         // setIsMenuOpen(false);
//       } else {
//         setIsVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     }, 50);

//     setScrollTimeout(timeout);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (scrollTimeout) clearTimeout(scrollTimeout);
//     };
//   }, [lastScrollY]);

//   const location = useLocation();
//   const path = location.pathname;
//   const hash = location.hash;

//   const linkStyle = " text-black transform font-nunito-sans transition duration-300 ease-in-out text-lg";

//   return (
//     <nav className={`transition-all bg-realWhite z-[100] w-full ${isVisible ? "translate-y-0" : "-translate-y-full"} transition-max-height hover:shadow-md duration-300 ease-in-out fixed top-0  p-4 border-b border-black `}>
//       <ul className="flex justify-around items-center">
//         <li className={`${linkStyle} ${path === "/" ? "scale-105" : "hover:scale-105"} group`}>
//           <Link to="/" className="relative">
//             <span className="">home</span>
//             <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300  ${path === "/" ? "w-full" : "group-hover:w-full"}`}></span>
//           </Link>
//         </li>
//         <li className={`${linkStyle} ${path.includes("services") ? "scale-105" : "hover:scale-105"} group`}>
//           <a href="#services">
//             <span className="">services</span>
//             <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300  ${path.includes("services") ? "w-full" : "group-hover:w-full"}`}></span>
//           </a>
//         </li>
//         <h1 className="font-meow-script-regular xl:text-6xl">I'm Thea</h1>
//         <li className={`${linkStyle} ${hash.includes("projects") ? "font-bold" : "hover:scale-105"} group`}>
//           <a href="#projects">
//             <span className="">projects</span>
//             <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300  ${hash.includes("projects") ? "w-full" : "group-hover:w-full"}`}></span>
//           </a>
//         </li>
//         <li className={`${linkStyle} ${path.includes("about") ? "font-bold" : "hover:scale-105"}`}>
//           <a href="#about">
//             <span className="">about</span>
//             <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300  ${hash.includes("projects") ? "w-full" : "group-hover:w-full"}`}></span>
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }
