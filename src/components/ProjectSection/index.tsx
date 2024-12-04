// import { RiTailwindCssFill, RiReactjsLine, RiJavascriptFill, RiBootstrapFill, RiCss3Fill } from "react-icons/ri";
// import { FaSass } from "react-icons/fa";
// import { BiLogoTypescript } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  logo: string;
  id: number;
  tailwind: boolean;
  react: boolean;
  js: boolean;
  typescript: boolean;
  bootstrap: boolean;
  sass: boolean;
  cssModules: boolean;
}

export default function ProjectSection({ project }: { project: Project }): JSX.Element {
  const imageClasses = "overflow-hidden relative m-auto";
  return (
    <section className="">
      <div className="border-y p-6 flex flex-col items-center justify-center gap-5 bg-black text-realWhite">
        <h3 className="font-libre-baskerville text-2xl uppercase text-center ">{project.title}</h3>
        <div className="">
          <Link to={project.url} className="relative flex items-center gap-2 justify-end font-nunito-sans text-blue-500 text-center group">
            <div className="relative">
              <span className="">live demo</span>
              {/* <span className="hover:scale-105 block transition-all duration-300 ease-in-out">live demo</span> */}
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-realWhite transition-all duration-300 group-hover:w-full"></span>
            </div>
            <GoArrowRight className="transform group-hover:translate-x-2 group-hover:animate-bounceArrow transition-all duration-300" />
          </Link>
        </div>
      </div>
      <div className={imageClasses}>
        <div className="bg-white bg-opacity-50 absolute top-0 z-[50] h-full w-full hover:bg-opacity-0 transition-all duration-300 ease-in-out"></div>
        <img src={project.image} alt={project.title} className="w-full object-cover" />
      </div>
    </section>
  );
}